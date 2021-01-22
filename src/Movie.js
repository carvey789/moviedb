import React from 'react';
import Searchmovie from './components/Searchmovie';
import './App.css';

function Movie() {
  return (
    <div className='container'>
        <h1>
            Cari Movie
        </h1>
        <Searchmovie/>
    </div>
  );
}

export default Movie;