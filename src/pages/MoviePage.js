import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import SearchBar from '../components/SearchBar/SearchBar';
import apiRequest from '../services/apiRequest';
import styles from '../pages/styles.module.css';


export default class MoviePage extends Component {
  static propTypes = {
    location: T.shape().isRequired,
    history: T.shape().isRequired,
    match: T.shape().isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const query = new URLSearchParams(location.search).get('query');
    if (!query) return;
  
    apiRequest.fetchMovieSearch(query).then(movies => {
      this.setState({ movies });
    });
    }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );

    const nextQuery = new URLSearchParams(location.search).get('query');

    if (prevQuery === nextQuery) return;

    apiRequest.fetchMovieSearch(nextQuery).then(movies => {
      this.setState({ movies });
    });

  }

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { movies } = this.state;
    const {match, location} = this.props;

    return (
      <div className={styles.wrapper}>
        <h1>Movies</h1>
        
        <SearchBar onSearch={this.setSearchQuery} />

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${match.url}/${movie.id}`,
                  state: {from: location},
                }}
              >
                {movie.original_title || movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

