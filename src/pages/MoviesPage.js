import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import queryString from 'query-string';
import SearchBar from '../components/SearchBar/SearchBar';
import apiRequest from '../services/apiRequest';
import styles from '../pages/styles.module.css';


const getQueryParams = props =>
  queryString.parse(props.location.search);

export default class MoviesPage extends Component {
  static propTypes = {
    location: T.shape().isRequired,
    history: T.shape().isRequired,
    match: T.shape().isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const queryParams = getQueryParams(this.props);
    
    if (!queryParams.query) {
      return;
    }
    apiRequest.fetchMovieSearch(queryParams.query).then(movies => {
        this.setState({ movies });
      });
    }

  componentDidUpdate(prevProps) {
    const prevQuery = getQueryParams(prevProps);
    const nextQuery = getQueryParams(this.props);

    if (prevQuery === nextQuery) {
      return;
    }

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

