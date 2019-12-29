import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import T from 'prop-types';

import SearchBar from '../components/SearchBar/SearchBar';
import apiRequest from '../services/apiRequest';
import styles from '../pages/styles.module.css';

const getQueryPramsFromProps = props =>
  queryString.parse(props.location.search);

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
    const queryParams = getQueryPramsFromProps(this.props);

    if (!queryParams.query) {
      return;
    }

    apiRequest.fetchMovieSearch(queryParams.query).then(movies => {
      this.setState({ movies });
    });
    }

  componentDidUpdate(prevProps) {
    // const { location } = this.props;
    // const prevQuery = new URLSearchParams(prevProps.location.search).get(
    //   'query',
    // );
    // const nextQuery = new URLSearchParams(location.search).get('query');

    // if (prevQuery === nextQuery) {
    //   return;
    // }

    const queryParams = getQueryPramsFromProps(this.props);

    if (!queryParams.query) {
      return;
    }


    apiRequest.fetchMovieSearch(queryParams.query).then(movies => {
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

