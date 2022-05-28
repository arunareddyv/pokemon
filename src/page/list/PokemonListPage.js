import React from "react";
import { Col, Row } from "react-bootstrap";

import PokemonCard from '../../components/pokemon-card/PokemonCard'

class PokemonList extends React.Component {
  render() {
    return (
      <div>
        <div className="Pg-title">
          <h1>Pokemon List</h1>
        </div>
        <Row>
          <Col >
            <PokemonCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PokemonList;