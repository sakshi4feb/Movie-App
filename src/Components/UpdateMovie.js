import React, { useState } from 'react';
import Button from './Button';

function UpdateMovie(props) {
    const { imdbID, Title, Type, Year, Poster } = props.movie;
    const { setIsUpdate, updateMovie } = props;
    const [movie, setMovie] = useState({
        imdbID: imdbID,
        Title: Title,
        Type: Type,
        Year: Year,
        Poster: Poster
    });
    const submitUpdate = (e) => {
        e.preventDefault();
        //update it
        updateMovie(movie);
        setMovie({
            Title: '',
            Type: '',
            Year: ''
        });
        setIsUpdate(false);
        alert('successfully updated');
    };
    const handleFormFiled = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };
    return (
        <div className="form" id="form">
            <div className="child__form">
                <form onSubmit={submitUpdate} className="search__form">
                    <label htmlFor="Title">Movie/Show Name:</label>
                    <input type="text" placeholder="enter movie/show title" name="Title" value={movie.Title} onChange={handleFormFiled} required className="form__input"></input>
                    <br></br>
                    <label htmlFor="movieType">Movie Type:</label>
                    <select name="Type" value={movie.Type} onChange={handleFormFiled} className="form__sel" id="movieType">
                        <option value="">{movie.Type ? movie.Type : '--Please choose an option--'}</option>
                        <option value={'Horrow'}>Horrow</option>
                        <option value={'Thriller'}>Thriller</option>
                        <option value={'Documentry'}>Documentry</option>
                    </select>
                    <br></br>
                    <label htmlFor="Year">Release Year:</label>
                    <input type="text" placeholder="enter movie/show date of release" name="Year" value={movie.Year} onChange={handleFormFiled} required className="form__input"></input>
                    <br></br>
                    <Button type="submit">Update Movie</Button>
                </form>
            </div>
        </div>
    );
}
export default UpdateMovie;
