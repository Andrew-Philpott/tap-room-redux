import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
            <TableRow>
              <TableCell component="th" scope="row">
                {beer.name}
              </TableCell>
              <TableCell align="right">{beer.brand}</TableCell>
              <TableCell align="right">{beer.flavor}</TableCell>
              <TableCell align="right">{beer.alcoholContent}</TableCell>
              <TableCell align="right">{beer.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

BeerList.propTypes = {
  merchandiseList: PropTypes.array,
  onRemoveItem: PropTypes.func,
};

export default BeerList;
