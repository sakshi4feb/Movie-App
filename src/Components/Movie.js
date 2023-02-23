import React from 'react';

const Movie = (props) => {
    const { Title, Year, Type, Poster } = props.movie;
    console.log(Title);
    return (
        <div>
            {Poster ? <img src={Poster} alt="movie" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iwpPSZsnDqf52czYxFbuRgg_GbqgxUsG2g&usqp=CAU" alt="movie" />}

            <p>Title: {Title}</p>
            <p>Type: {Type}</p>
            <p>Year: {Year}</p>
        </div>
    );
};

export default Movie;
