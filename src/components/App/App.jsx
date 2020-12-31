import React from "react";
import PeopleBlock from "../PersonBlock/PersonBlock";
import Autocomplete from "../Autocomplete/Autocomplete";
import { BrowserRouter, Route } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import Navbar from "../NavBar/Navbar";

const App = () => (
  <BrowserRouter basename="/star-wars">
    <Navbar />
    <Route
      exact
      path="/"
      render={() => (
        <>
          <Autocomplete />
          <PeopleBlock />
        </>
      )}
    />
    <Route exact path="/favorites" component={Favorites} />
  </BrowserRouter>
);

export default App;
