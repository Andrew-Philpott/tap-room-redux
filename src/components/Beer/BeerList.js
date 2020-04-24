import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid, Container } from "@material-ui/core";

function BeerList(props) {
  return (
    <Container>
      <Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row">
                    On Tap
                  </TableCell>
                  <TableCell align="right">Brand</TableCell>
                  <TableCell align="right">Flavor</TableCell>
                  <TableCell align="right">ABV</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Pints</TableCell>
                  <TableCell align="right">Sell</TableCell>
                  <TableCell align="right">Restock</TableCell>
                  <TableCell align="right">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.beerList.map((beer) =>
                  beer.pints > 0 ? (
                    <TableRow key={beer.id}>
                      <TableCell
                        onClick={() => props.onShowBeerDetail(beer.id)}
                        component="th"
                        scope="row"
                      >
                        {beer.name}
                      </TableCell>
                      <TableCell align="right">{beer.brand}</TableCell>
                      <TableCell align="right">{beer.flavor}</TableCell>
                      <TableCell align="right">{beer.alcoholContent}</TableCell>
                      <TableCell align="right">{beer.price}</TableCell>
                      <TableCell align="right">{beer.pints}</TableCell>
                      <TableCell
                        onClick={() => props.onBeerPintDecrement(beer.id)}
                        align="right"
                      >
                        -
                      </TableCell>
                      {beer.pints > 0}
                      <TableCell
                        onClick={() => props.onBeerPintIncrement(beer.id)}
                        align="right"
                      >
                        +
                      </TableCell>
                      <TableCell
                        onClick={() => props.onRemoveBeer(beer.id)}
                        align="right"
                      >
                        X
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow key={beer.id}>
                      <TableCell
                        onClick={() => props.onShowBeerDetail(beer.id)}
                        component="th"
                        scope="row"
                      >
                        {beer.name}
                      </TableCell>
                      <TableCell align="right">{beer.brand}</TableCell>
                      <TableCell align="right">{beer.flavor}</TableCell>
                      <TableCell align="right">{beer.alcoholContent}</TableCell>
                      <TableCell align="right">{beer.price}</TableCell>
                      <TableCell align="right">{beer.pints}</TableCell>
                      <TableCell align="right">-</TableCell>
                      {beer.pints > 0}
                      <TableCell
                        onClick={() => props.onBeerPintIncrement(beer.id)}
                        align="right"
                      >
                        +
                      </TableCell>
                      <TableCell
                        onClick={() => props.onRemoveBeer(beer.id)}
                        align="right"
                      >
                        X
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onShowBeerDetail: PropTypes.func,
  onBeerPintIncrement: PropTypes.func,
  onBeerPintDecrement: PropTypes.func,
  onRemoveBeer: PropTypes.func,
};

export default BeerList;
