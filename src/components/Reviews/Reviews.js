import React, { Component } from 'react';
import T from 'prop-types';
import apiReaquest from '../../services/apiRequest';


export default class Reviews extends Component {
  static propTypes = {
    match: T.shape().isRequired,
  };

  state = {
      reviews: [],
  };

  componentDidMount() {
      this.fetchMovieReviews();
  }

  fetchMovieReviews = () => {
    const { movieId } = this.props.match.params;

    apiReaquest.fetchMovieReviews(movieId).then(reviews => {
      this.setState({ reviews });
    });  
  };
    


  render() {
    const { reviews } = this.state;

    return (
        <>
          {reviews && (
            <ul>
              {reviews.map(review => (
                <li key={review.id}>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      );
    }
  }