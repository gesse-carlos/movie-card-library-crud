import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MovieCard,
  Loading,
  Header,
} from '../components/index';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
    this.moviesData = this.moviesData.bind(this);
  }

  async componentDidMount() {
    this.fetchMovies();
  }

  moviesData = (movies) => (
    movies.map(
      (movie) => (
        <MovieCard key={ movie.title } movie={ movie } className="movie-card-body" />
      ),
    )
  );

  async fetchMovies() {
    const moviesData = await movieAPI.getMovies();
    this.setState({
      movies: moviesData,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    // console.log(movies);
    // Render Loading here if the request is still happening
    return (
      <div>
        <main>
          <Header />
          <section data-testid="movie-list" className="movie-list">
            { loading ? <Loading /> : this.moviesData(movies) }
          </section>
        </main>
        <footer>
          <Link to="/movie-card-library-crud/movies/new" className="add-card">ADICIONAR CARTÃO</Link>
        </footer>
      </div>
    );
  }
}

export default MovieList;
