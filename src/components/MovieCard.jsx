import React from "react";
import styled from "styled-components";

const Movie = styled.div`
  display: grid;
  grid-template-columns: 30% 66%;
  grid-gap: 4%;

  width: 80%;
  margin: 3% auto;
  padding: 2%;
  border: solid black 1px;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.3);
  text-align: left;

  &:hover {
    background-color: #e5e5e5;
  }

  img {
    width: 124px;
    height: 176px;
    border: solid black 1px;
  }
`;

function MovieCard(props) {
  return (
    <Movie>
      <img src={props.imgUrl} alt="Movie poster" />
      <div>
        <h2>{props.title}</h2>
        <p>Director : {props.director}</p>
        <p>Release : {props.release_date}</p>
      </div>
    </Movie>
  );
}

export default MovieCard;
