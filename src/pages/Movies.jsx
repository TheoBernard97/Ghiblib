import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media all and (max-width: 1489px) {
    grid-template-columns: 1fr 1fr;
  }

  @media all and (max-width: 944px) {
    display: unset;
  }
`;

function Movies() {
  const movieList = useSelector((state) => state);

  return (
    <div>
      <Header />
      <h1>Movies</h1>
      <MoviesWrapper>
        {movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            imgUrl={movie.imgUrl}
            title={movie.title}
            director={movie.director}
            release_date={movie.release_date}
          />
        ))}
      </MoviesWrapper>
      <Footer />
    </div>
  );
}

export default Movies;
