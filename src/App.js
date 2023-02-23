import React, { useEffect, useState } from 'react';

import Search from './Components/Search';
import Movies from './Components/Movies';

// eslint-disable-next-line no-unused-vars
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=73041739';

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const result = await response.json();
        setMovies(result.Search);
    };
    useEffect(() => {
        searchMovies('Jurassic Park');
    }, []);

    const handleSearch = (value) => {
        searchMovies(value);
    };

    const handleDelete = (id) => {
        //as we have asked not to use DELEET http mehtod . this is being removed from just state
        setMovies(movies?.filter((movie) => movie.imdbID !== id));
    };
    return (
        <div>
            <Search onSearch={handleSearch} />
            <Movies movies={movies} handleDelete={handleDelete} />
        </div>
    );
};

export default App;