import { React, useState } from "react";
import axios from "axios";

export default function MoviesFinder() {
  const [movieName, setMovieName] = useState("");
  const [moviesData, setMoviesData] = useState("");
  const apiKey = "6dc52160";
  const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

  async function getMovies() {
    try {
      const response = await axios.get(url);
      setMoviesData(response.data);
      console.log(moviesData);
    } catch (error) {
      console.log("This is the error: ", error);
    }
  }

  function handleChange(e) {
    setMovieName(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      getMovies();
    }
  }

  return (
    <div>
      <input
        type="search"
        value={movieName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {movieName ? (
        <div>
          <img src={moviesData.Poster} />
          <h1>{moviesData.Title}</h1>
          <h2>{moviesData.Year}</h2>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
