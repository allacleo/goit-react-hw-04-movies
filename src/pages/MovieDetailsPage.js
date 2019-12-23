import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import T from 'prop-types';
import apiRequest from '../services/apiRequest';
import Reviews from '../components/Reviews/Reviews';
import routes from '../routes';

import Cast from '../components/Cast/Cast';
// import styles from './styles.module.css';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    match: T.shape().isRequired,
    location: T.shape().isRequired,
    history: T.shape.isRequired,
  };

  state = { movie: null };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const { movieId } = this.props.match.params;

    apiRequest.fetchMovieDetails(movieId).then(movie => {
      this.setState({ movie });
    });
  };

  onGoBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);
      return;
    }

    this.props.history.push(`${routes.HOME}||${routes.MOVIES}`);
  };


  render() {
    const { movie } = this.state;
    const { match, location } = this.props;

    return (
      <div>
        <button type="button" onClick={this.onGoBack}>
          Go back
        </button>

        <h1>Movie Details</h1>

        {movie && (
          <>
            <img
              src={apiRequest.moviePoster + movie.poster_path}
              alt={movie.title}
            />
            <h2>{movie.original_title || movie.original_name}</h2>
            <p>User score: {movie.popularity}%</p>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
            <h3>Genres:</h3>
            <p>{movie.genres.map(genre => genre.name)}</p>
          </>
        )}

        <p>Additional information</p>

        <ul>
          <li>
            <Link
              to={{
                pathname: `${match.url}/${routes.CAST}`,
                state: { from: location },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${match.url}/${routes.REVIEWS}`,
                state: { from: location },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>

        <hr />

        <Route path={`${match.path}/${routes.CAST}`} component={Cast} />
        <Route path={`${match.path}/${routes.REVIEWS}`} component={Reviews} />
      </div>
    );
  }
}
