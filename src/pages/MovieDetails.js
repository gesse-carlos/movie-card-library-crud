import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movieData = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: movieData,
    });
  }

  async removeMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const {
      movie:
      { id, title, storyline, imagePath, genre, rating, subtitle },
      loading,
    } = this.state;

    return (
      loading ? <Loading /> : (
        <div>
          <section data-testid="movie-details" className="movie-card">
            <h2 className="movie-card-title">{ `Title: ${title}` }</h2>
            <img
              alt={title}
              src={ imagePath }
              className="movie-card-image"
            />
            <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
            <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
          </section>
          <Link to={ `/movie-card-library-crud/movies/${id}/edit` } className="button">EDITAR</Link>
          <Link
            to="/movie-card-library-crud"
            onClick={ () => this.removeMovie(id) }
            className="button"
          >
            DELETAR
          </Link>
          <Link to="/movie-card-library-crud" className="button">VOLTAR</Link>
        </div>
      )
    );
  }
}

const { shape, string } = PropTypes;

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;

export default MovieDetails;