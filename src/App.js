import React, { Fragment } from 'react';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import './App.css';
import PokemonList from './page/list/PokemonListPage';
import PokemonDetails from './page/details/PokemonDetailsPage';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<PokemonList />} />
          <Route exact path="/details/:name" element={<PokemonDetails />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
