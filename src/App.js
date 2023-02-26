/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Search from './Components/Search';
import Movies from './Components/Movies';
import AddNewMovie from './Components/AddNewMovie';
import UpdateMovie from './Components/UpdateMovie';

import { BrowserRouter } from 'react-router-dom';
/*import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';*/
import Navbar from './pages/Navbar';

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
        setIsUpdate(true);
        setMovie(movie);
    };
    const updateMovie = (changedMovie) => {
        const updatedMovies = movies.map((m) => {
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
    if (movies.length > 0) {
        contentElement = <Movies movies={movies} handleDelete={handleDelete} handleUpdate={handleUpdate} />;
    }
    return (
        <div className="container">
            <BrowserRouter>
                <header>
                    <Navbar />
                </header>
                {/*<Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                     <Route path="*" element={<Error />} />
                     </Routes>*/}
                <main>
                    {isLoading && <p>Loading...</p>}
                    <Search onSearch={handleSearch} />
                    {error ? <p>{error}</p> : contentElement}
                    {isUpdate ? <UpdateMovie movie={movie} setIsUpdate={setIsUpdate} updateMovie={updateMovie} /> : <AddNewMovie onNewMovie={handleNewMovie} />}
                </main>

                <footer>Footer</footer>
            </BrowserRouter>
        </div>
    );
};
export default App;
