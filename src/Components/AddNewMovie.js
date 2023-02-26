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
        <section id="add-movie">
            <form onSubmit={handleSubmit} className="search__form">
                <input type="text" placeholder="enter movie/show title" name="Title" value={Title} onChange={handleChange} required className="form__input"></input>
                <input type="text" placeholder="enter movie/show type" name="Type" value={Type} onChange={handleChange} required className="form__input"></input>
                <input type="text" placeholder="enter movie/show date of release" name="Year" value={Year} onChange={handleChange} required className="form__input"></input>
                <Button type="submit" className="btn">
                    Add New Movie
                </Button>
            </form>
        </section>
    );
};

export default AddNewMovie;
