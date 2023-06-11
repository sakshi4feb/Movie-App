import React from 'react';
import Button from './Button';

const Movie = (props) => {
    const { Title, Year, Type, Poster, imdbID } = props.movie;
    const { handleDelete, handleUpdate } = props;

    return (
<<<<<<< HEAD
        <div className="product card">
            {/* {Poster ? <img src={Poster} alt="movie" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iwpPSZsnDqf52czYxFbuRgg_GbqgxUsG2g&usqp=CAU" alt="movie" />} */}
            {/* <section className="data">*/}
            <img src={Poster} alt="movie" />
            <p>Title: {Title}</p>
            <p>Type: {Type}</p>
            <p>Year: {Year}</p>
            <br></br>
            <Button
                className="button"
                onClick={() => {
                    handleDelete(imdbID);
                }}>
                Delete
            </Button>
            <a href="#form" alt="discover more">
                <Button
                    className="button"
                    onClick={() => {
                        handleUpdate(props.movie);
                    }}>
                    Update
                </Button>
            </a>
            {/*</section>*/}
=======
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
>>>>>>> fe460bf52f742cda9b06e404148d31e7067097bc
        </div>
    );
};

export default Movie;