import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <h2>Home</h2>
      <Link to="/movies">Movies</Link>
    </div>
  );
}

export default Home;
