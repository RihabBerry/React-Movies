import Card from "./Component/UI/Card";
import Button from "./Component/UI/Button";
import { Fragment, useState } from "react";
import MovieList from "./Component/Movie/MovieList";
import classes from "./App.module.css";
import AddMovie from "./Component/Movie/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    const response = await fetch(
      "https://react-movie-e18ec-default-rtdb.firebaseio.com/movies.json"
    );
    const data = await response.json();
    console.log(data);
    const loadedMovies = [];
    for (const key in data) {
      loadedMovies.push({
        id: key,
        title: data[key].titleValue,
        description: data[key].messageValue,
        releaseDate: data[key].releaseDateValue,
      });
    }
    setMovies(loadedMovies);

    /*  const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        description: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies); */
  }
  async function addMovieHandler(movie) {
    console.log("this is your movie", movie);
    const response = await fetch(
      "https://react-movie-e18ec-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        header: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <Fragment>
      <Card>
        <AddMovie addMovie={addMovieHandler} />
      </Card>
      <Card>
        <Button onClick={fetchMoviesHandler} title={"Fecth Movie"} />
      </Card>
      <MovieList movies={movies} />
    </Fragment>
  );
}

export default App;
