import React from "react";
import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <div className={classes.container}>
      <h1>{props.title} </h1>
      <p>{props.description}</p>
    </div>
  );
};
export default Movie;
