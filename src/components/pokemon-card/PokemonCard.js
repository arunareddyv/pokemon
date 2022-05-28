import React from 'react';
import { Link } from "react-router-dom";
import { Card, Row, Col } from 'react-bootstrap';

class PokemonCard extends React.Component {
    render() {
      return (
          <Card>
            <Card.Img variant="top" src="logo192.png" />
            <Card.Body>
              <Card.Title>Pokemon name</Card.Title>
              <Card.Text>
                Pokemon details
              </Card.Text>
            </Card.Body>
          </Card>
      );
    }
}

export default PokemonCard;