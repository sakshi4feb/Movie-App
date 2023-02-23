import React from 'react';

const Movie = (props) => {
    const { Title, Year, Type, Poster, imdbID } = props.movie;
    const { handleDelete } = props;

    console.log(Title);
    return (
        <div className="movie">
            {Poster ? <img src={Poster} alt="movie" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iwpPSZsnDqf52czYxFbuRgg_GbqgxUsG2g&usqp=CAU" alt="movie" />}
            <section className="data">
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
