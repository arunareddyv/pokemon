import React, { Fragment } from 'react';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import PokemonList from './page/list/PokemonListPage';
import PokemonDetails from './page/details/PokemonDetailsPage';

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<PokemonList/>} />
            <Route exact path="/details/:id" element={<PokemonDetails/>} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
