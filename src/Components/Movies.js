import React from 'react';
import Movie from './Movie';

const Movies = (props) => {
    const { movieSearch, handleDelete, handleEdit } = props;

    const movieList = movieSearch.map((movie) => <Movie key={movie.imdbID} movie={movie} handleDelete={handleDelete} handleEdit={handleEdit} />);
    return <div className="movie__card">{movieList}</div>;
};

export default Movies;
