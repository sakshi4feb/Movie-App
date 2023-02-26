/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Search from './Components/Search';
import Movies from './Components/Movies';
import AddNewMovie from './Components/AddNewMovie';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Pages/Error';
import Navbar from './Pages/Navbar';
import Addmovie from './Pages/Navbar';

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

    const handleNewMovie = (value) => {
        //console.log(value);
        const newValue = { imdbID: uuidv4(), ...value };
        //console.log(newValue);
        //setMovies([newValue]);
        setMovies((prevMovies) => [...prevMovies, newValue]);
    };
    const handleDelete = (id) => {
        //as we have asked not to use DELEET http mehtod . this is being removed from just state
        setMovies(movies?.filter((movie) => movie.imdbID !== id));
    };
    /* const handleUpdate=(id) => {*/
    return (
        <div>
            <BrowserRouter>
                <header>
                    <Navbar />
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/addnewmovie" element={<AddNewMovie />} />
                    <Route path="*" element={<Error />} />
                </Routes>

                <main>
                    <Search onSearch={handleSearch} />
                    <Movies movies={movies} handleDelete={handleDelete} />
                    <AddNewMovie onNewMovie={handleNewMovie} />
                </main>

                <footer>Footer</footer>
            </BrowserRouter>
        </div>
    );
};
export default App;
