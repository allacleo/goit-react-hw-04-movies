  import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import styles from './styles.module.css';

import apiRequest from '../services/apiRequest';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.fetchTrending();
  }

  fetchTrending = () => {
    apiRequest.fetchMoviesTrending().then(data => {
      this.setState({ movies: data.results });
    });
  };

  render() {
    const {movies} = this.state;

    return (
      <div className={styles.wrapper}>
        <h1>Trending today</h1>

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${routes.MOVIES}/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}