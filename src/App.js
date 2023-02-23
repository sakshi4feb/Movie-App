/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Search from './Components/Search';
import Movies from './Components/Movies';
import AddNewMovie from './Components/AddNewMovie';

// eslint-disable-next-line no-unused-vars
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=73041739';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleNewMovie = (value) => {
        const newValue = { imdbID: uuidv4(), ...value };
        setMovies((prevMovies) => [...prevMovies, newValue]);
    };
    const handleDelete = (id) => {
        //as we have asked not to use DELEET http mehtod . this is being removed from just state
        setMovies(movies?.filter((movie) => movie.imdbID !== id));
    };
   /* const handleUpdate=(id) => {*/
    return (
        <div>
            <h2>Movies Portal</h2>
            <Search onSearch={handleSearch} />
            <Movies movies={movies} handleDelete={handleDelete} />
            <AddNewMovie onNewMovie={handleNewMovie} />
        </div>
    );
};
export default App;