import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr;

  img {
    width: 50%;
    margin: auto;
  }

  nav {
    margin: auto;
  }
`;

const Linker = styled(Link)`
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  margin: 25px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <img src="./assets/Logo_Ghibli.png" alt="Studio Ghibli logo" />
      <nav>
        <Linker to="/">Home</Linker>
        <Linker to="/movies">Movies</Linker>
        <Linker to="/museum">Museum</Linker>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
