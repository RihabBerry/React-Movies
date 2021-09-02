import React from "react";
import Movie from "./Movie";
import Card from "../UI/Card";
const MovieList = (props) => {
  const movies = props.movies.map((movie) => (
    <Movie title={movie.title} description={movie.description} />
  ));
  return <Card>{movies}</Card>;
};
export default MovieList;
