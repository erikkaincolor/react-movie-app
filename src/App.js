import React from 'react';
import MovieCard from './MovieCard';

import { useState, useEffect } from 'react';
// useEffect is how u use api

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=56113d7a'



const App = ()=>{
    const [movies, setMovies]= useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies= async (title) =>{
        // async bc we want app to wait before it does this
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Equalizer');
}, []);

    return (
    <div className="app">
    <h1>MovieLand</h1>
    

{/* SEACH DIV */}
    <div className='search'>
    <input 
        placeholder='Search For Movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />

    <img
        src={SearchIcon}
        alt='Search'
        onClick={()=>searchMovies(searchTerm)}
    />

</div>
 
 {
    movies?.length > 0
    ? (
        <div className="container">
            {movies.map((movie)=>(
                <MovieCard movie={movie} />
            ))}
        </div> 
    ) : (
        <div className="empty">
            <h2>No  movies found</h2>
        </div>
    )

 }
 

    </div>
    );
}

export default App;