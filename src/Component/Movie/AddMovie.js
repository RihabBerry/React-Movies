import React, { Fragment, useRef } from "react";
import Button from "../UI/Button";
import classes from "./AddMovie.module.css";
const AddMovie = (props) => {
  const title = useRef();
  const message = useRef();
  const releaseDate = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("you come here");
    const movie = {
      titleValue: title.current.value,
      messageValue: message.current.value,
      releaseDateValue: releaseDate.current.value,
    };

    props.addMovie(movie);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label htmlFor="title" className={classes.label}>
          Title
        </label>
        <input name="title" ref={title} />
        <label htmlFor="message">Opening Text</label>
        <textarea rows="5" name="message" ref={message}></textarea>
        <label htmlFor="releaseDate">Release Date</label>
        <input name="releaseDate" ref={releaseDate}></input>
        <Button type="submit" title="Add Movie">
          Add Movie
        </Button>
      </form>
    </Fragment>
  );
};
export default AddMovie;
