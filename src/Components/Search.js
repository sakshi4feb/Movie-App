import React, { useState } from 'react';

import Button from './Button';

const Search = (props) => {
    const [movie, setMovie] = useState('');

    const handleChange = (e) => {
        setMovie(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(movie);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="search__form">
                <input type="text" placeholder="enter movie/show" name="movie" value={movie} onChange={handleChange} className="form__input"></input>
                <Button type="submit" className="btn">
                    Search
                </Button>
            </form>
        </div>
    );
};

export default Search;
