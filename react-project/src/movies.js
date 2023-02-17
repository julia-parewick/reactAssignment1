import './App.css';
import {useState, useEffect} from 'react';
import {App2} from './submit';
import {Link} from 'react-router-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function MovieList(props){
  console.log(props.allmovies)
  
  return(
    <body>
      <header>
        <h1>
          Movie Reviews
        </h1>
        <div>
          <nav>
            <Link to="/">View Movies</Link>
            <Link to="/submit">Submit</Link>
          </nav>
        </div>
      </header>
      <tbody><tr><td>Movies</td></tr>{props.allmovies.map((m,i)=><tr key={i}><td key={i}>{m.title}</td></tr>)}</tbody>
    </body>
  )
}


function App() {

  let [movies, setMovies] = useState(null);

  useEffect(()=>{
    // load data from json
    fetch("./movies.json")
    .then(res=>res.json())
    .then(setMovies)
    .catch(e=>console.log(e.message))
  },[])

  console.log(movies);

  if(movies==null){
    return <h1>Loading...</h1>
  }

  return (
    <Routes>
        <Route path="/" element={<MovieList allmovies={(movies)}/>}/>
        <Route path="/submit" element={<App2 movies={movies} setMovies={setMovies}/>}/>
    </Routes>
  );
}

export default App;
