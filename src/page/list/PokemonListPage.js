import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from 'react-bootstrap';

class PokemonList extends React.Component {
  render() {
    return (
      <div>
        <div className="Pg-title">
          <h1>Pokemon List</h1>
        </div>
        <Row>
          <Col>
          <Card>
            <Card.Img variant="top" src="logo192.png" />
            <Card.Body>
              <Card.Title>Pokemon name</Card.Title>
              <Card.Text>
                Pokemon details
              </Card.Text>
              <Link to="/details/1">Details page</Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PokemonList;