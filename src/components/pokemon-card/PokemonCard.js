import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import './pokemoncard.css';
import pokemonService from '../../service/PokemonService';
import StatusSpinner from '../sprinner/Spinner';

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inProgress: true }
  }

  async componentDidMount() {
    if (!this.props.url) {
      this.setState({ inProgress: false })
      return;
    };

    this.setState({ inProgress: true })
    try {
      const data = await pokemonService.getPokemonDetails(this.props.url);
      this.setPokemonData(data);
    } catch (error) {
    }
    this.setState({ inProgress: false })
  }

  setPokemonData({ data }) {
    const { height, weight, abilities = [], sprites } = data;
    this.setState({
      height,
      weight,
      image: sprites.other.dream_world.front_default,
      abilities: abilities.map(data => data.ability.name)
    })
    this.props.onSelect(data);
  }

  render() {
    if (this.state.inProgress) {
      return <StatusSpinner inProgress={this.state.inProgress}></StatusSpinner>
    }

    if (!this.props.url) {
      return null;
    }

    return (
      <Card className='Poke-card p-2'>
        <Card.Img variant="top" src={this.state.image} />
        <Card.Body>
          <Card.Title className='text-center'>{this.props.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col className='col-4'>Weight - </Col>
              <Col >{this.state.weight}</Col>
            </Row>
            <Row>
              <Col className='col-4'>Height - </Col>
              <Col >{this.state.height}</Col>
            </Row>
            <Row>
              <Col className='col-4'>Abilities - </Col>
              <Col >{
                this.state.abilities.map(ability => <span className='px-1' key={ability}><Badge bg="secondary">{ability}</Badge></span>)
              }</Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default PokemonCard;