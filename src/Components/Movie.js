import React from 'react';
import Button from './Button';

const Movie = (props) => {
    const { Title, Year, Type, Poster, imdbID } = props.movie;
    const { handleDelete } = props;

    console.log(Title);
    return (
        <div className="card-container">
            <div className="image-conntainer">
                <img src={Poster} alt="movie" />
                <section className="card-info">
                    <p>Title: {Title}</p>
                    <p>Type: {Type}</p>
                    <p>Year: {Year}</p>
                </section>
                <Button
                    onClick={() => {
                        handleDelete(imdbID);
                    }}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Movie;
