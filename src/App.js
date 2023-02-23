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
    return (
        <div>
            <h1 className="title">Book My Show</h1>
            <Search onSearch={handleSearch} />
            <Movies movies={movies} />
        </div>
    );
};

export default App;
