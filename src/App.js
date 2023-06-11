<<<<<<< HEAD
/* eslint-disable max-lines */
=======
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-distracting-elements */
>>>>>>> fe460bf52f742cda9b06e404148d31e7067097bc
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Search from './Components/Search';
import Movies from './Components/Movies';
import AddNewMovie from './Components/AddNewMovie';
<<<<<<< HEAD
import UpdateMovie from './Components/UpdateMovie';
import Footer from './Components/Footer';
=======
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Pages/Error';
import Navbar from './Pages/Navbar';
import Addmovie from './Pages/Navbar';
>>>>>>> fe460bf52f742cda9b06e404148d31e7067097bc

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Navbar from './Pages/Navbar';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=73041739';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [movieSearch, setMovieSearch] = useState([]);
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            if (!response.ok) {
                throw new Error('failed to load data');
            }
            const result = await response.json();
            setMovieSearch(result.Search);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        searchMovies('Jurassic Park');
    }, []);

    localStorage.setItem('MY_KEY', movieSearch ? JSON.stringify(movieSearch) : '');

    const handleSearch = (value) => {
        const data = localStorage.getItem('MY_KEY');
        const newData = data ? JSON.parse(data) : [];
        const result = newData.filter((movie) => movie.Title.includes(value));
        if (result.length > 0) {
            setMovieSearch(result);
        } else {
            // eslint-disable-next-line max-lines
            searchMovies(value);
        }
    };
    const handleNewMovie = (value) => {
        const newValue = { imdbID: uuidv4(), ...value };
        setMovieSearch((prevMovies) => [...prevMovies, newValue]);
    };
    const handleDelete = (id) => {
        const data = localStorage.getItem('MY_KEY');
        setMovieSearch(JSON.parse(data));
        const newData = movieSearch.filter((movie) => movie.imdbID !== id);
        localStorage.setItem('MY_KEY', JSON.stringify(newData));
        setMovieSearch(newData);
        alert('movie is deleted!');
    };

    const handleUpdate = (movie) => {
        setIsUpdate(true);
        setMovie(movie);
    };
    const updateMovie = (changedMovie) => {
        const updatedMovies = movieSearch.map((m) => {
            if (changedMovie.imdbID === m.imdbID) {
                m['Title'] = changedMovie.Title;
                m['Type'] = changedMovie.Type;
                m['Year'] = changedMovie.Year;
            }
            return m;
        });
        setMovies(updatedMovies);
    };

    let contentElement = '';
    if (movieSearch?.length > 0) {
        contentElement = <Movies movieSearch={movieSearch} movies={movies} handleDelete={handleDelete} handleUpdate={handleUpdate} />;
    }

    return (
<<<<<<< HEAD
        <div className="container">
=======
        <div>
>>>>>>> fe460bf52f742cda9b06e404148d31e7067097bc
            <BrowserRouter>
                <header>
                    <Navbar />
                </header>
<<<<<<< HEAD

                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Search onSearch={handleSearch} />
                    {error ? <p>{error}</p> : contentElement}
                    {isUpdate ? <UpdateMovie movie={movie} setMovie={setMovie} setIsUpdate={setIsUpdate} updateMovie={updateMovie} /> : <AddNewMovie onNewMovie={handleNewMovie} />}
                </main>
                <Footer />
=======
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
>>>>>>> fe460bf52f742cda9b06e404148d31e7067097bc
            </BrowserRouter>
        </div>
    );
};
export default App;