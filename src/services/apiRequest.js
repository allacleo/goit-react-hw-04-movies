const moviePoster = 'https://image.tmdb.org/t/p/w300';

const fetchMoviesTrending = () => {
    return fetch(
        'https://api.themoviedb.org/3/trending/all/day?api_key=08ce4741fc784e2e0a74eb2fa686235b',
    ).then(res => res.json());
};

const fetchSearchMovie = searchQuery => {
    return fetch(
        'hthttps://api.themoviedb.org/3/search/company?api_key=08ce4741fc784e2e0a74eb2fa686235b&page=1tps://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=08ce4741fc784e2e0a74eb2fa686235b&language=en-US&page=1&include_adult=false'
    ).then(res => res.json())
    .then(data => data.results);
};

const fetchMovieDetails = movieId => {
    return fetch(
        'https://api.themoviedb.org/3/movie/${movieId}?api_key=08ce4741fc784e2e0a74eb2fa686235b&language=en-US'
    ).then(res => res.json());
};

const fetchMovieCast = movieId => {
    return fetch(
        'https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=08ce4741fc784e2e0a74eb2fa686235b'
    ).then(res => res.json());
};


export default {
    moviePoster,
    fetchMoviesTrending,
    fetchSearchMovie,
    fetchMovieDetails,
    fetchMovieCast,
};

