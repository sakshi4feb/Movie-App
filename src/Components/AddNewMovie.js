/* eslint-disable max-lines */
import React, { useState } from 'react';

import Button from './Button';

const AddNewMovie = (props) => {
    const [newMovie, setNewMovie] = useState({
        Title: '',
        Type: '',
        Year: '',
        Poster: ''
    });

    const { Title, Type, Year } = newMovie;

    const handleChange = (e) => {
        if (e.target.name === 'Poster') {
            setNewMovie((prevState) => {
                return {
                    ...prevState,
                    [e.target.name]: URL.createObjectURL(e.target.files[0])
                };
            });
            return;
        }

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
            Year: '',
            Poster: ''
        });
    };
    return (
        <div className="form" id="form">
            <div className="child__form">
                <form onSubmit={handleSubmit} className="search__form">
                    <input type="file" id="image" name="Poster" accept="image/png, image/jpg" onChange={handleChange} />
                    <label htmlFor="Title">Movie/Show Name:</label>
                    <input type="text" placeholder="enter movie/show title" name="Title" value={Title} onChange={handleChange} required className="form__input"></input>
                    <br></br>
                    {/* <input type="text" placeholder="enter movie/show type" name="Type" value={Type} onChange={handleChange} required className="form__input"></input> */}
                    <label htmlFor="movieType">Movie Type:</label>
                    <select name="Type" value={Type} onChange={handleChange} required className="form__sel" id="movieType">
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
        </div>
    );
};

export default AddNewMovie;