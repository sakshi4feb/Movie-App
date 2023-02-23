import React from 'react';

const Movie = (props) => {
    const { Title, Year, Type, Poster, imdbID } = props.movie;
    const { handleDelete } = props;

    console.log(Title);
    return (
        <div>
            <img src={Poster} alt="movie" />
            <section className="">
                <p>Title: {Title}</p>
                <p>Type: {Type}</p>
                <p>Year: {Year}</p>
                <button
                    onClick={() => {
                        handleDelete(imdbID);
                    }}>
                    Delete
                </button>
            </section>
        </div>
    );
};

export default Movie;
