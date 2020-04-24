import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

function BeerList(props) {
  return (
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
          </TableRow>
        </TableHead>
        <TableBody>
          {props.beerList.map((beer) => (
            <div>
              <TableRow key={beer.id}>
                <TableCell component="th" scope="row">
                  {beer.name}
                </TableCell>
                <TableCell align="right">{beer.brand}</TableCell>
                <TableCell align="right">{beer.flavor}</TableCell>
                <TableCell align="right">{beer.alcoholContent}</TableCell>
                <TableCell align="right">{beer.price}</TableCell>
              </TableRow>

              <Button onClick={() => props.onShowBeerDetail(beer.id)}>
                {beer.id}
              </Button>
            </div>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onShowBeerDetail: PropTypes.func,
};

export default BeerList;
