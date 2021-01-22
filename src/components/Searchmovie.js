import React, {useState} from 'react';
import '../App.css';
import Moviecards from './Moviecards';

function Searchmovie() {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [movies, setMovies] = useState([]);
    const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=f90362117f6d4867959c03c846117617&language=en-US&query=";
    

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(searchKeyword) {
                fetch(SEARCH_API + searchKeyword)
                .then(res => res.json())
                .then(data => {
                  setMovies(data.results)
                })
        }

    };

    const handleOnChange = (e) => {
        setSearchKeyword(document.querySelector('input').value);
    }

    

    return (
        <div className="container">
            <div className='searchbox'>
                <form onSubmit={handleOnSubmit}>
                    <input className='textbox' type="text" value={searchKeyword} onChange={handleOnChange}/>
                </form>
            </div>
            {movies.map(m => <Moviecards key={m.id} {...m}/>)} 
        </div>
    );
}

// async function Getmovies() {
//     const keyword = document.querySelector('.textbox').value;
//     const [movies, setmovies] = useState([]);
//     const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=f90362117f6d4867959c03c846117617&language=en-US&query=" + keyword;

//     await useEffect(() => {
//         fetch(SEARCH_API)
//         .then(res => res.json())
//         .then(data => {
//             setmovies(data.results)
//         })
//     }, []);

//     console.log(movies);
// }

export default Searchmovie;
