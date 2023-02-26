import React from 'react';
import Button from './Button';

const Movie = (props) => {
    const { Title, Year, Type, Poster, imdbID } = props.movie;
    const { handleDelete, handleUpdate } = props;

    return (
        <div className="product card">
            {Poster ? <img src={Poster} alt="movie" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iwpPSZsnDqf52czYxFbuRgg_GbqgxUsG2g&usqp=CAU" alt="movie" />}
            {/* <section className="data">*/}
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
            <Button
                className="button"
                onClick={() => {
                    handleUpdate(props.movie);
                }}>
                Update
            </Button>
            {/*</section>*/}
        </div>
    );
};

export default Movie;
