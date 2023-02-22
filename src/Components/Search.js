import React, { useState } from 'react';

const Search = (props) => {
    const [movie, setMovie] = useState('');

    const handleChange = (e) => {
        // update the product state with the recent input value
        setMovie(e.target.value);
        console.log(movie);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(movie);
        props.onSearch(movie);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="search__form">
                <input type="text" placeholder="enter movie/show" name="movie" value={movie} onChange={handleChange} className="form__input"></input>
                <button type="submit" className="btn">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
