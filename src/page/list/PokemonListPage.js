import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import PokemonCard from '../../components/pokemon-card/PokemonCard'
import './PokemonListPage.css';
import StatusSpinner from "../../components/sprinner/Spinner";
import Pagination from "../../components/pagination/Pagination";
import PokemonListService from "./PokemonListService";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    const pageSizes = [10, 20, 50];
    this.state = {
      inProgress: false,
      pageSizes,
      pageOptions: {
        selectedValue: pageSizes[0]
      }
    }
    this.pokemonlistService = new PokemonListService(pageSizes);
    this.resetPagination();
  }
  componentDidMount = () => {
    this.refreshPokeMonCards()
  }

  resetData = () => {
    this.setState({ inProgress: true, pokemonsList: undefined })
  }

  resetPagination = () => {
    const pageOptions = {
      options: this.state.pageSizes,
      selectedValue: this.pokemonlistService.limit,
      hasNext: this.pokemonlistService.hasNext,
      hasPrevious: this.pokemonlistService.hasPrevious
    }
    this.setState({ pageOptions })
  }

  refreshPokeMonCards = async (options) => {
    this.resetData();
    try {
      const data = await this.pokemonlistService.getPokemonData(options);
      this.setState({ pokemonsList: data || [] });
      this.resetPagination();
    } catch (error) {

    }
    this.setState({ inProgress: false })
  }

  onPageCountChange = (value) => {
    this.pokemonlistService.limit = value;
    this.refreshPokeMonCards()

  }

  onNext = () => {
    this.refreshPokeMonCards({ isNext: true });
  }

  onPrevious = () => {
    this.refreshPokeMonCards({ isPrevious: true });
  }


  render() {
    return (
      <div>
        <div className="Pg-title">
          <h1>Pokemon List</h1>
        </div>
        <Pagination data={this.state.pageOptions} onPageCountSelect={this.onPageCountChange} onNext={this.onNext} onPrevious={this.onPrevious}></Pagination>
        <StatusSpinner inProgress={this.state.inProgress}></StatusSpinner>
        <Row>
          {
            this.state.pokemonsList &&
            this.state.pokemonsList.map(({ name, url }) => {
              return (
                <Col key={name} className="mt-5 ">
                  <Link to={`/details/${name}`} className="Details-link">
                    <PokemonCard name={name} url={url} />
                  </Link>
                </Col>
              );
            })

          }
        </Row>
        <Pagination data={this.state.pageOptions} onPageCountSelect={this.onPageCountChange} onNext={this.onNext} onPrevious={this.onPrevious}></Pagination>
      </div>
    );
  }
}

export default PokemonList;