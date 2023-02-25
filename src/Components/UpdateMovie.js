import React, { useState } from 'react';
import Button from './Button';

function UpdateMovie(props) {
    const { Title, Type, Year } = props.movie;
    const [movie, setMovie] = useState({
        Title: '',
        Type: '',
        Year: ''
    });
    const handleUpdate = (e) => {
        //e.preventDefault();
        //update it
        //props.updateMovie(movie)
        console.log(movie);
        setMovie({
            Title: '',
            Type: '',
            Year: ''
        });
    };

    const handleFormFiled = (e) => {
        console.log(`${e.target.name} = ${e.target.value}`);
    };

    return (
        <div>
            <form onSubmit={handleUpdate} className="search__form">
                <label htmlFor="Title">Movie/Show Name:</label>
                <input type="text" placeholder="enter movie/show title" name="Title" value={Title} onChange={handleFormFiled} required className="form__input"></input>
                <br></br>
                <label htmlFor="movieType">Movie Type:</label>
                <select name="Type" value={Type} onChange={handleFormFiled} className="form__input" id="movieType">
                    <option value="">--Please choose an option--</option>
                    <option value={'Horrow'}>Horrow</option>
                    <option value={'Thriller'}>Thriller</option>
                    <option value={'Documentry'}>Documentry</option>
                </select>
                <br></br>
                <label htmlFor="Year">Release Year:</label>
                <input type="text" placeholder="enter movie/show date of release" name="Year" value={Year} onChange={handleFormFiled} required className="form__input"></input>
                <br></br>
                <Button type="submit" className="btn">
                    Update Movie
                </Button>
            </form>
        </div>
    );
}

export default UpdateMovie;
