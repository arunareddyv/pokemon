import React from "react";
import { Link } from "react-router-dom";

class PokemonList extends React.Component {
  render() {
    return (
      <div>
        <p>Pokemon list page</p>
        <Link to="/details/1">Details page</Link>
      </div>
    );
  }
}

export default PokemonList;