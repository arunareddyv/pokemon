import React from "react";
import { useLocation } from 'react-router-dom';
import { Card, Col, Row, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import StatusSpinner from "../../components/sprinner/Spinner";
import pokemonService from "../../service/PokemonService";

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inProgress: false,
      name: this.getPathParam(),
      abilities: [],
      sprites: {},
      types: []
    }
  }

  getPathParam() {
    const value = window.location.pathname.split("/");
    return value[value.length - 1];
  }
  async componentDidMount() {
    if (!this.state.name) {
      return;
    }
    this.setState({ inProgress: true });
    try {
      const { data } = await pokemonService.getPokemonDetailsByName(this.state.name);
      this.setState({ ...data });
    } catch (error) {

    }
    this.setState({ inProgress: false });
  }
  render() {
    if (this.state.inProgress) {
      return <StatusSpinner inProgress={this.state.inProgress}></StatusSpinner>
    }

    return (
      <div>
        <div className="Pg-title">
          <h1>{this.state.name} Details</h1>
        </div>
        <Link to={"/"}>Back</Link>
        <div className="m-3 border rounded p-3">
          <Row className="mt-3">
            <Col ><b>Name</b> : {this.state.name}</Col>
            <Col ><b>Weight</b>: {this.state.weight}</Col>
            <Col ><b>Height</b> : {this.state.height}</Col>
          </Row>
          <Row className="mt-3">
            <Col><b>Abilities :</b>
              {
                this.state.abilities.map(data => <span className='px-1' key={data.ability.name}><Badge>{data.ability.name}</Badge></span>)
              }
            </Col>
          </Row>
          <Row className="mt-3">
            <Col><b>Types :</b>
              {
                this.state.types.map(data => <span className='px-1' key={data.type.name}><Badge>{data.type.name}</Badge></span>)
              }
            </Col>
          </Row>
          <Row className="mt-3">
            <Col><b>Sprites :</b></Col>
          </Row>
          <Row className="col-9">
            <Col>
              <Card className='Poke-card p-2 m-2'>
                <Card.Body>
                  <Card.Title>Front</Card.Title>
                  <Card.Text>
                    <img src={this.state.sprites.front_default} style={{height: '250px'}}></img>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card className='Poke-card p-2 m-2'>
                <Card.Body>
                  <Card.Title>Back</Card.Title>
                  <Card.Text>
                    <img src={this.state.sprites.back_default}  style={{height: '250px'}}></img>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default PokemonDetails;