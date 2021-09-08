import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  MovieDetails,
  EditMovie,
  MovieList,
  NewMovie,
  NotFound,
} from './pages/index';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movie-card-library-crud" component={ MovieList } />
        <Route exact path="/movie-card-library-crud/movies/new" component={ NewMovie } />
        <Route exact path="/movie-card-library-crud/movies/:id" component={ MovieDetails } />
        <Route exact path="/movie-card-library-crud/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
