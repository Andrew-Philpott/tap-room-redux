import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import beer from "../../assets/img/beer.jpg";

export const Home = () => {
  return (
    <CardMedia
      style={{ height: "500", width: "100%" }}
      image={beer}
    ></CardMedia>
  );
};
