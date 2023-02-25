/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Search from './Components/Search';
import Movies from './Components/Movies';
import AddNewMovie from './Components/AddNewMovie';
import UpdateMovie from './Components/UpdateMovie';

// eslint-disable-next-line no-unused-vars
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=73041739';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            if (!response.ok) {
                throw new Error('failed to load data');
            }
            const result = await response.json();
            setMovies(result.Search);
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        setIsLoading(true);
        searchMovies('Jurassic Park');
    }, []);

    const handleSearch = (value) => {
        setMovies(movies.filter((movie) => movie.Title.match(value)));
    };

    const handleNewMovie = (value) => {
        const newValue = { imdbID: uuidv4(), ...value };
        setMovies((prevMovies) => [...prevMovies, newValue]);
    };
    const handleDelete = (id) => {
        //as we have asked not to use DELEET http mehtod . this is being removed from just state
        setMovies(movies?.filter((movie) => movie.imdbID !== id));
    };

    const handleUpdate = (movie) => {
        console.log(movie);
        setIsUpdate(true);
        setMovie(movie);
    };

    let contentElement = '';
    if (movies.length > 0) {
        contentElement = <Movies movies={movies} handleDelete={handleDelete} handleUpdate={handleUpdate} />;
    }
    return (
        <div>
            <h2>Movies Portal</h2>
            {isLoading && <p>Loading...</p>}
            <Search onSearch={handleSearch} />
            {error ? <p>{error}</p> : contentElement}
            {isUpdate ? <UpdateMovie movie={movie} handleUpdate={handleUpdate} /> : <AddNewMovie onNewMovie={handleNewMovie} />}
        </div>
    );
};
export default App;
