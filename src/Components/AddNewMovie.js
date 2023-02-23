import React, { useState } from 'react';

const AddNewMovie = (props) => {
    const [newMovie, setNewMovie] = useState({
        Title: '',
        Type: '',
        Year: '',
        Poster: ''
    });

    const { Title, Type, Year, Poster } = newMovie;
    const handleChange = (e) => {
        // update the product state with the recent input value
        setNewMovie((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(newMovie);
        props.onNewMovie(newMovie);
        setNewMovie({
            Title: '',
            Type: '',
            Year: '',
            Poster: ''
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="search__form">
                {/* <label for="myFile">Upload movie/show image</label> */}
                {/* <input type="file" id="myFile" name="Poster" value={Poster} onChange={handleChange}></input> */}
                <input type="text" placeholder="enter movie/show title" name="Title" value={Title} onChange={handleChange} className="form__input"></input>
                <input type="text" placeholder="enter movie/show type" name="Type" value={Type} onChange={handleChange} className="form__input"></input>
                <input type="text" placeholder="enter movie/show date of release" name="Year" value={Year} onChange={handleChange} className="form__input"></input>
                <button type="submit" className="btn">
                    Add New Movie
                </button>
            </form>
        </div>
    );
};

export default AddNewMovie;
