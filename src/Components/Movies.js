import React from 'react';
import Movie from './Movie';

const Movies = (props) => {
    const { movies, handleDelete } = props;
    console.log(movies);
    const movieList = movies.map((movie) => <Movie key={movie.imdbID} movie={movie} handleDelete={handleDelete} />);
    return <div className="movie__card">{movieList}</div>;
};

export default Movies;
