import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error">
        Página não encontrada
        <Link to="/movie-card-library-crud" className="link">Página Inicial</Link>
      </div>
    );
  }
}

export default NotFound;
