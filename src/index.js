import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";
import moviesReducer from "./reducers/movies";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    text-align: center;
    padding : 0 10%;
    font-family: 'Montserrat', sans-serif;
    background-color : #F6F6F6;
  }

  code {
    font-family: 'Montserrat', sans-serif;
  }

`;

const store = createStore(
  moviesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
