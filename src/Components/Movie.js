import React from 'react';
import Button from './Button';

const Movie = (props) => {
    const { Title, Year, Type, Poster, imdbID } = props.movie;
    const { handleDelete } = props;

    console.log(Title);
    return (
<<<<<<< HEAD
        <div className="card_container">
            <div className="image_conntainer">
                <img src={Poster} alt="movie" />
                <section className="card_info">
                    <p>Title: {Title}</p>
                    <p>Type: {Type}</p>
                    <p>Year: {Year}</p>
                </section>
            </div>
=======
        <div className="movie">
            {Poster ? <img src={Poster} alt="movie" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iwpPSZsnDqf52czYxFbuRgg_GbqgxUsG2g&usqp=CAU" alt="movie" />}
            <section className="data">
                <p>Title: {Title}</p>
                <p>Type: {Type}</p>
                <p>Year: {Year}</p>
                <Button
                    onClick={() => {
                        handleDelete(imdbID);
                    }}>
                    Delete
                </Button>
            </section>
>>>>>>> main
        </div>
    );
};

export default Movie;
