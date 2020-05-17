import React from "react";
import styled from "styled-components";

const Movie = styled.div`
  width: 80%;
  margin: 3% auto;
  padding: 2%;
  border: solid black 1px;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    background-color: #e5e5e5;
  }
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
