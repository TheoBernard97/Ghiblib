import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../actions/closeModal";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CloseIcon from "@material-ui/icons/Close";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;

  .modal {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "poster info"
      "poster description";
    position: relative;
    margin: auto;
    padding: 1%;
    width: 790px;
    max-height: 475px;
    background-color: white;
    border: solid black 1px;
  }

  .modal-close-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border: black solid 1px;
    border-radius: 50%;
    background-color: white;
    text-align: center;
    * {
      width: 18px;
      height: 18px;
    }
    &:hover {
      background-color: #e5e5e5;
      cursor: pointer;
    }
  }

  .modal-poster {
    grid-area: poster;
    border: solid black 1px;
    width: 100%;
    min-height: 475px;
    max-height: 475px;
  }

  .modal-info {
    grid-area: info;
    text-align: left;
    margin-left: 15px;

    h1 {
      margin-top: 0;
    }
  }

  .modal-description {
    grid-area: description;
    text-align: left;
    margin: 0 0 0 15px;
    font-size: 1.1rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media all and (max-width: 944px) {
    .modal {
      grid-template-columns: 125px 1fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "poster info"
        "description description";
      margin: auto;
      width: 75%;
      height: 45%;
    }

    .modal-poster {
      min-height: 175px;
      max-height: 175px;
    }

    .modal-description {
      margin: 2% 0 0;
    }
  }

  @media all and (max-width: 765px) {
    .modal {
      grid-template-columns: 100px 1fr;
      width: 90%;
      height: 70%;
    }

    .modal-poster {
      min-height: 140px;
      max-height: 140px;
    }

    .modal-info {
      margin-left: 10px;

      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.3rem;
      }
      h3 {
        font-size: 1.1rem;
        margin-bottom: 0;
      }
    }

    .modal-description {
      font-size: 0.9rem;
    }
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
            className="modal-poster"
          />
          <div className="modal-info">
            <h1>{moviesReducer[modalReducer.renderMovie].title}</h1>
            <h2>{moviesReducer[modalReducer.renderMovie].director}</h2>
            <h3>{moviesReducer[modalReducer.renderMovie].release_date}</h3>
          </div>
          <p className="modal-description">
            {moviesReducer[modalReducer.renderMovie].description}
          </p>
          <div
            className="modal-close-btn"
            onClick={() => dispatch(closeModal())}
          >
            <CloseIcon />
          </div>
        </div>
      </ClickAwayListener>
    </ModalWrapper>
  );
}

export default Modal;
