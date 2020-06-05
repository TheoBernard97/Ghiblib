import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "../actions/openModal";

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
    transform: scale(1.03);
    background-color: #e5e5e5;
    cursor: pointer;
  }

  img {
    margin: auto;
    width: 100%;
    border: solid black 1px;
  }

  h2 {
    margin-top: 5px;
  }

  p {
    margin-bottom: unset;
  }

  @media all and (max-width: 1489px) {
    width: 85%;
  }

  @media all and (max-width: 944px) {
    width: 95%;
    margin: 5% auto;

    h2 {
      font-size: 1.3rem;
    }
  }
`;

function MovieCard(props) {
  const dispatch = useDispatch();

  return (
    <Movie onClick={() => dispatch(openModal(props.index))}>
      <img src={props.imgUrl} alt="Movie poster" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.director}</p>
        <p>{props.release_date}</p>
      </div>
    </Movie>
  );
}

export default MovieCard;
