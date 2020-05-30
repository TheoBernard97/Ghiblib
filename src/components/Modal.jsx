import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../actions/closeModal";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

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
    font-size: 1.1rem;
  }
`;

function Modal() {
  const moviesReducer = useSelector((state) => state.moviesReducer);
  const modalReducer = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  return (
    <ModalWrapper>
      <ClickAwayListener onClickAway={() => dispatch(closeModal())}>
        <div className="modal">
          <img
            src={moviesReducer[modalReducer.renderMovie].imgUrl}
            alt="Movie poster"
          />
          <div className="modal-info">
            <h1>{moviesReducer[modalReducer.renderMovie].title}</h1>
            <h2>{moviesReducer[modalReducer.renderMovie].director}</h2>
            <h3>{moviesReducer[modalReducer.renderMovie].release_date}</h3>
            <p>{moviesReducer[modalReducer.renderMovie].description}</p>
          </div>
        </div>
      </ClickAwayListener>
    </ModalWrapper>
  );
}

export default Modal;
