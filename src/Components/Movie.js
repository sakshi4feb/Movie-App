import React from 'react';

const Movie = (props) => {
    const { Title, Year, Type, Poster } = props.movie;
    console.log(Title);
    return (
        <div className="card_container">
            <div className="image_conntainer">
                <img src={Poster} alt="movie" />
                <section className="card_info">
                    <p>Title: {Title}</p>
                    <p>Type: {Type}</p>
                    <p>Year: {Year}</p>
                </section>
            </div>
        </div>
    );
};

export default Movie;
