import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./actions/fetchMovies";

function App() {
  const dispatch = useDispatch();

  dispatch(fetchMovies());

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
