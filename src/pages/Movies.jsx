import React, { useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";

const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function Movies() {
  const [movies, setMovies] = useState([]);
  const [fetched, setFetched] = useState(false);

  if (fetched === false) {
    setFetched(true);
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          setMovies((prevElements) => {
            return [...prevElements, element];
          });
        });
      });
  }

  return (
    <div>
      <Header />
      <h1>Movies</h1>
      <MoviesWrapper>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            director={movie.director}
          />
        ))}
      </MoviesWrapper>
    </div>
  );
}

export default Movies;
