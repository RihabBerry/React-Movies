import Card from "./Component/UI/Card";
import Button from "./Component/UI/Button";
import { Fragment, useState } from "react";
import MovieList from "./Component/Movie/MovieList";
import classes from "./App.module.css";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        description: movieData.opening_crawl,
        releaseDate: movieData.releas_date,
      };
    });
    setMovies(transformedMovies);
  }

  return (
    <Fragment>
      <div className={classes.content}>
        <Card>
          <Button onClick={fetchMoviesHandler} />
        </Card>
        <MovieList movies={movies} />
      </div>
    </Fragment>
  );
}

export default App;
