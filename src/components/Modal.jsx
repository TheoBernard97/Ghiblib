import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../actions/closeModal";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;

  .modal {
    display: flex;
    position: relative;
    margin: auto;
    padding: 1% 0.5% 1% 1%;
    width: 750px;
    max-height: 425px;
    background-color: white;
    border: solid black 1px;
  }

  .btn {
    display: flex;
    align-items: center;
    position: absolute;
    top: 45%;
    background-color: white;
    border-radius: 50%;
    height: 48px;
    width: 48px;
    &:hover {
      background-color: #e5e5e5;
    }
    * {
      margin: auto;
    }
  }

  .prev-btn {
    left: -10%;
  }

  .next-btn {
    right: -10%;
  }

  img {
    border: solid black 1px;
    min-height: 425px;
    min-width: 40%;
    max-width: 40%;
  }

  .modal-info {
    text-align: left;
    margin-left: 3%;
    padding-right: 0.5%;
    overflow-y: scroll;
  }

  h1 {
    margin-top: 0;
  }

  p {
    font-size: 1.2rem;
  }
`;

function Modal() {
  const moviesReducer = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();
  const [movieNumber, setMovieNumber] = useState(0);

  function nextMovie() {
    setMovieNumber((prevValue) => {
      if (prevValue < 19) {
        return prevValue + 1;
      }
      return prevValue;
    });
  }

  function prevMovie() {
    setMovieNumber((prevValue) => {
      if (prevValue > 0) {
        return prevValue - 1;
      }
      return prevValue;
    });
  }

  return (
    <ModalWrapper>
      <div className="modal">
        <div className="btn prev-btn" onClick={prevMovie}>
          <ArrowBackIcon />
        </div>
        <img src={moviesReducer[movieNumber].imgUrl} alt="Movie poster" />
        <div className="modal-info">
          <h1>{moviesReducer[movieNumber].title}</h1>
          <h2>{moviesReducer[movieNumber].director}</h2>
          <h3>{moviesReducer[movieNumber].release_date}</h3>
          <p>{moviesReducer[movieNumber].description}</p>
          <button onClick={() => dispatch(closeModal())}>Close</button>
        </div>
        <div className="btn next-btn" onClick={nextMovie}>
          <ArrowForwardIcon />
        </div>
      </div>
    </ModalWrapper>
  );
}

export default Modal;
