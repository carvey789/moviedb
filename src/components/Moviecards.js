import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/original';

const Moviecard = ({title, poster_path, overview, vote_average}) => (
    <div className='movie-card'>
        <img src={IMG_API + poster_path} alt={title}/>
        <div className="movie-card-info">
            <p className="title">{title}</p>
            <p className="vote">{vote_average}</p>
        </div>
        <div className="movie-overview">
            <h3>Overview</h3>
            <p>{overview}</p>
        </div>
        
    </div>
); 

export default Moviecard;