/* eslint-disable max-lines */
import React, { useState } from 'react';

import Button from './Button';

const AddNewMovie = (props) => {
    const [newMovie, setNewMovie] = useState({
        Title: '',
        Type: '',
        Year: ''
    });

    const { Title, Type, Year } = newMovie;
    const handleChange = (e) => {
        setNewMovie((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMovie(newMovie);
        setNewMovie({
            Title: '',
            Type: '',
            Year: ''
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="search__form">
                <label htmlFor="Title">Movie/Show Name:</label>
                <input type="text" placeholder="enter movie/show title" name="Title" value={Title} onChange={handleChange} required className="form__input"></input>
                <br></br>
                {/* <input type="text" placeholder="enter movie/show type" name="Type" value={Type} onChange={handleChange} required className="form__input"></input> */}
                <label htmlFor="movieType">Movie Type:</label>
                <select name="Type" value={Type} onChange={handleChange} required className="form__input" id="movieType">
                    <option value="">--Please choose an option--</option>
                    <option>Horrow</option>
                    <option>Thriller</option>
                    <option>Comedy</option>
                    <option>Documentry</option>
                </select>
                <br></br>
                <label htmlFor="Year">Release Year:</label>
                <input type="text" placeholder="enter movie/show date of release" name="Year" value={Year} onChange={handleChange} required className="form__input"></input>
                <br></br>
                <Button type="submit" className="btn">
                    Add New Movie
                </Button>
            </form>
        </div>
    );
};

export default AddNewMovie;
