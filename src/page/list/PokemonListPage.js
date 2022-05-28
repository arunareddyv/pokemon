import React from "react";
import { Col, Row } from "react-bootstrap";

import PokemonCard from '../../components/pokemon-card/PokemonCard'

import pokemonService from "../../service/PokemonService";
import StatusSpinner from "../../components/sprinner/Spinner";

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      inProgress: true,
    }
  }
  componentDidMount() {
    this.refreshPokeMonCards()
  }

  resetData() {
    this.setState({ inProgress: true })
    this.setState({ pokemonsList: undefined })
  }

  async refreshPokeMonCards(url) {
    this.resetData();
    try {
      const { data } = await pokemonService.getAllPokemons({ url })
      this.setState({ pokemonsList: { ...data } })
    } catch (error) {

    }
    this.setState({ inProgress: false })
  }

  render() {
    return (
      <div>
        <div className="Pg-title">
          <h1>Pokemon List</h1>
        </div>
        <StatusSpinner inProgress={this.state.inProgress}></StatusSpinner>
        <Row>
          {
            this.state.pokemonsList &&
            this.state.pokemonsList.results.map(({ name, url }) => {
              return (
                <Col key={name} className="mt-5 ">
                  <PokemonCard name={name} url={url} />
                </Col>
              );
            })

          }
        </Row>


      </div>
    );
  }
}

export default PokemonList;