import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './Nav';
import Movie from './Movie';
import Moviecards from './components/Moviecards';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/Movie' exact component={Movie}></Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  const [movies, setMovies] = useState([]);
  const POPULAR_API = "https://api.themoviedb.org/3/movie/popular?api_key=f90362117f6d4867959c03c846117617&language=en-US&page=1";

  useEffect(() => {
    fetch(POPULAR_API)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results)
    })
  }, []);

  return (
    <div className='container'>
      <h1>Popular Movies</h1>
      {movies.map(m => <Moviecards key={m.id} {...m}/>)}
    </div>
  );
}

export default App;
