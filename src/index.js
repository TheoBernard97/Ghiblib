import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    text-align: center;
    padding : 0 10%;
    font-family: 'Montserrat', sans-serif;
  }

  code {
    font-family: 'Montserrat', sans-serif;
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
