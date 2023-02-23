import React from 'react';

const Movie = (props) => {
    const { Title, Year, Type, Poster } = props.movie;
    console.log(Title);
    return (
        <div className="movie">
            <img src={Poster} alt="movie" />
            <section className="info">
                <p>Title: {Title}</p>
                <p>Type: {Type}</p>
                <p>Year: {Year}</p>
            </section>
        </div>
    );
};

export default Movie;
