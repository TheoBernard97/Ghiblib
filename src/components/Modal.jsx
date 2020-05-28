import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../actions/closeModal";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;

  .prev-btn {
    position: fixed;
    top: 50%;
    left: 25%;
  }

  .next-btn {
    position: fixed;
    top: 50%;
    left: 75%;
  }

  .modal {
    display: flex;
    margin: auto;
    padding: 1%;
    width: 40%;
    background-color: white;
    border: solid black 1px;
  }

  img {
    border: solid black 1px;
  }

  .modal-info {
    text-align: left;
    margin-left: 3%;
  }

  p {
    font-size: 1.2rem;
  }
`;

function Modal() {
  const moviesReducer = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  return (
    <ModalWrapper>
      <button className="prev-btn">-</button>
      <div className="modal">
        <img src={moviesReducer[0].imgUrl} alt="Movie poster" />
        <div className="modal-info">
          <h1>{moviesReducer[0].title}</h1>
          <h2>{moviesReducer[0].director}</h2>
          <h3>{moviesReducer[0].release_date}</h3>
          <p>{moviesReducer[0].description}</p>
          <button onClick={() => dispatch(closeModal())}>Close</button>
        </div>
      </div>
      <button className="next-btn">+</button>
    </ModalWrapper>
  );
}

export default Modal;
