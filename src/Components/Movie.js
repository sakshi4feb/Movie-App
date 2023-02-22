import React from 'react';

const Movie = (props) => {
    const { Title, Year, Type, Poster } = props.movie;
    console.log(Title);
    return (
        <div>
            <img src={Poster} alt="movie" />
            <p>Title: {Title}</p>
            <p>Type: {Type}</p>
            <p>Year: {Year}</p>
        </div>
    );
};

export default Movie;
