import React from 'react';
import Button from './Button';

const Movie = (props) => {
    const { Title, Year, Type, Poster, imdbID } = props.movie;
    const { handleDelete } = props;

    console.log(Title);
    return (
        <div className="card-container">
            <div className="movie">
                {Poster ? <img src={Poster} alt="movie" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iwpPSZsnDqf52czYxFbuRgg_GbqgxUsG2g&usqp=CAU" alt="movie" />}

                <p>Title: {Title}</p>
                <p>Type: {Type}</p>
                <p>Year: {Year}</p>
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
