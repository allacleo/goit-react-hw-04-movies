import React, {Component} from 'react';
import T from 'prop-types';
import shortid from 'shortid';
import apiRequest from '../../services/apiRequest';

export default class Cast extends Component {
  static propTypes = {
    match: T.shape().isRequired,
  };

  state = {
    actors: [],
  };

  componentDidMount() {
    this.fetchMovieActors();
  }

  fetchMovieActors = () => {
    const { movieId } = this.props.match.params;

    apiRequest.fetchMovieCast(movieId).then(actors => {
      this.setState({ actors });
    });
  };

  render() {
    const { actors } = this.state;
console.log(actors);
    return (
      <>
        {actors.length > 0 && (
          <ul>
            {actors.map(actor => (
              <li key={shortid.generate()}>
                <img
                  src={apiRequest.moviePoster + actor.profile_path}
                  alt={actor.name}
                  width="100"
                />
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}