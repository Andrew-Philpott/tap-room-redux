import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Grid, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  orange: {
    color: "orange",
  },
  yellow: {
    color: "yellow",
  },
  green: {
    color: "green",
  },
  tableCell: {
    borderBottom: "none",
    color: "white",
  },
  actionLinkStyle: {
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    minWidth: "100",
  },
});

export const BeerList = (props) => {
  const {
    beerList,
    onDisplayBeerDetail,
    onDisplayEditBeerForm,
    onDisplayNewBeerForm,
    onDeleteBeer,
    onBeerPintIncrement,
    onBeerPintDecrement,
  } = props;
  const isBackgroundBlack = true;
  const classes = useStyles();
  return (
    <div
      style={{
        marginTop: 80,
        backgroundColor: isBackgroundBlack ? "black" : "white",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={8}>
            <span style={{ color: "white", fontSize: "2em" }}>
              Our selection
            </span>
          </Grid>
          <Grid item xs={4}>
            <Button
              style={{ backgroundColor: "white", float: "right" }}
              onClick={() => onDisplayNewBeerForm()}
            >
              Add beer
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      On Tap
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Brand
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Flavor
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      ABV
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Price
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Pints
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Buy
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Restock
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Edit
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Remove
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.values(beerList).map((beer) => {
                    return (
                      <TableRow key={beer.id}>
                        <TableCell className={classes.tableCell}>
                          <span
                            onClick={() => onDisplayBeerDetail(beer.id)}
                            className={classes.actionLinkStyle}
                          >
                            {beer.name}
                            {beer.pints > 10 ? (
                              ""
                            ) : beer.pints > 0 ? (
                              <>
                                <br />
                                <i style={{ color: "yellow" }}>Almost Empty</i>
                              </>
                            ) : (
                              <>
                                <br />
                                <i style={{ color: "red" }}>Out of stock</i>
                              </>
                            )}
                          </span>
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {beer.brand}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {beer.flavor}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {beer.alcoholContent}
                        </TableCell>
                        {beer.price > 12 ? (
                          <TableCell
                            style={{ color: "orange", borderBottom: "none" }}
                            align="left"
                          >
                            {beer.price}
                          </TableCell>
                        ) : beer.price > 8 ? (
                          <TableCell
                            style={{ color: "yellow", borderBottom: "none" }}
                            align="left"
                          >
                            {beer.price}
                          </TableCell>
                        ) : (
                          <TableCell
                            style={{ color: "green", borderBottom: "none" }}
                            align="left"
                          >
                            {beer.price}
                          </TableCell>
                        )}
                        <TableCell className={classes.tableCell} align="left">
                          {beer.pints}
                        </TableCell>
                        {beer.pints > 0 ? (
                          <TableCell
                            className={classes.tableCell}
                            align="center"
                          >
                            <span
                              style={{ fontSize: "1.8em" }}
                              onClick={() => onBeerPintDecrement(beer.id)}
                              className={classes.actionLinkStyle}
                            >
                              -
                            </span>
                          </TableCell>
                        ) : (
                          <TableCell
                            className={classes.tableCell}
                            align="center"
                          >
                            <span
                              style={{ fontSize: "1.8em" }}
                              className={classes.actionLinkStyle}
                            >
                              -
                            </span>
                          </TableCell>
                        )}

                        <TableCell className={classes.tableCell} align="center">
                          <span
                            className={classes.actionLinkStyle}
                            onClick={() => onBeerPintIncrement(beer.id)}
                          >
                            +
                          </span>
                        </TableCell>
                        <TableCell className={classes.tableCell} align="center">
                          <EditIcon
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={() => onDisplayEditBeerForm(beer.id)}
                          ></EditIcon>
                        </TableCell>
                        <TableCell
                          style={{
                            borderBottom: "none",
                          }}
                          align="center"
                        >
                          <span
                            className={classes.actionLinkStyle}
                            onClick={() => onDeleteBeer(beer.id)}
                          >
                            X
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

BeerList.propTypes = {
  beerList: PropTypes.object,
  onDisplayBeerDetail: PropTypes.func,
  onDisplayNewBeerForm: PropTypes.func,
  onDisplayEditBeerForm: PropTypes.func,
  onBeerPintIncrement: PropTypes.func,
  onBeerPintDecrement: PropTypes.func,
  onDeleteBeer: PropTypes.func,
};

export default BeerList;
