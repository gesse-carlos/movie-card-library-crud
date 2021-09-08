import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle, storyline, imagePath } } = this.props;
    return (
      <section data-testid="movie-card" className="movie-card">
        <h4 className="movie-card-title">{ title }</h4>
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Link to={ `/movies/${id}` } className="link">VER DETALHES</Link>
      </section>
    );
  }
}

const { shape, string, number } = PropTypes;

MovieCard.propTypes = {
  movie: shape({
    id: number,
    title: string,
    subtitle: string,
    storyline: string,
    imagePath: string,
  }),
}.isRequired;

export default MovieCard;