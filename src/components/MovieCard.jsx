import React from "react";
import styled from "styled-components";

const Movie = styled.div`
  width: 80%;
  margin: 3%;
  padding: 2%;
  border: solid black 1px;
  text-align: center;
`;

function MovieCard(props) {
  return (
    <Movie>
      <h2>{props.title}</h2>
      <p>{props.director}</p>
    </Movie>
  );
}

export default MovieCard;
