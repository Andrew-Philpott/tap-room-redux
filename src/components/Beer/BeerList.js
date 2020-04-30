import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
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
  whiteText: {
    color: "white",
  },
});
function BeerList(props) {
  const classes = useStyles();
  return (
    <Container className={classes.textColor}>
      <Grid>
        <Grid item xs={12}>
          <Typography color="white">
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      On Tap
                    </TableCell>
                    <TableCell className={classes.whiteText} align="right">
                      Brand
                    </TableCell>
                    <TableCell className={classes.whiteText} align="right">
                      Flavor
                    </TableCell>
                    <TableCell className={classes.whiteText} align="right">
                      ABV
                    </TableCell>
                    <TableCell className={classes.whiteText} align="right">
                      Price
                    </TableCell>
                    <TableCell className={classes.whiteText} align="right">
                      Pints
                    </TableCell>
                    <TableCell className={classes.whiteText} align="right">
                      Sell
                    </TableCell>
                    <TableCell className={classes.whiteText} align="right">
                      Restock
                    </TableCell>
                    <TableCell className={classes.whiteText} align="right">
                      Edit
                    </TableCell>
                    <TableCell className={classes.whiteText} align="right">
                      Remove
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.beerList.map((beer) => (
                    <TableRow key={beer.id}>
                      <TableCell
                        className={classes.whiteText}
                        onClick={() => props.onShowBeerDetail(beer.id)}
                        component="th"
                        scope="row"
                      >
                        {beer.name}
                        {beer.pints > 10
                          ? ""
                          : beer.pints > 0
                          ? " Almost Empty"
                          : " Out of Stock"}
                      </TableCell>
                      <TableCell className={classes.whiteText} align="right">
                        {beer.brand}
                      </TableCell>
                      <TableCell className={classes.whiteText} align="right">
                        {beer.flavor}
                      </TableCell>
                      <TableCell className={classes.whiteText} align="right">
                        {beer.alcoholContent}
                      </TableCell>
                      {beer.price > 12 ? (
                        <TableCell className={classes.whiteText} align="right">
                          <Typography className={classes.orange}>
                            {beer.price}
                          </Typography>
                        </TableCell>
                      ) : beer.price > 8 ? (
                        <TableCell align="right">
                          <Typography className={classes.orange}>
                            {beer.price}
                          </Typography>
                        </TableCell>
                      ) : (
                        <TableCell align="right">
                          <Typography className={classes.orange}>
                            {beer.price}
                          </Typography>
                        </TableCell>
                      )}

                      <TableCell className={classes.whiteText} align="right">
                        {beer.pints}
                      </TableCell>
                      {beer.pints > 0 ? (
                        <TableCell
                          className={classes.whiteText}
                          onClick={() => props.onBeerPintDecrement(beer.id)}
                          align="right"
                        >
                          -
                        </TableCell>
                      ) : (
                        <TableCell className={classes.whiteText} align="right">
                          -
                        </TableCell>
                      )}

                      <TableCell
                        className={classes.whiteText}
                        onClick={() => props.onBeerPintIncrement(beer.id)}
                        align="right"
                      >
                        +
                      </TableCell>
                      <TableCell
                        className={classes.whiteText}
                        onClick={() => props.onShowEditBeer(beer.id)}
                        align="right"
                      >
                        Edit
                      </TableCell>
                      <TableCell
                        className={classes.whiteText}
                        onClick={() => props.onRemoveBeer(beer.id)}
                        align="right"
                      >
                        X
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onShowBeerDetail: PropTypes.func,
  onShowEditBeer: PropTypes.func,
  onBeerPintIncrement: PropTypes.func,
  onBeerPintDecrement: PropTypes.func,
  onRemoveBeer: PropTypes.func,
};

export default BeerList;
