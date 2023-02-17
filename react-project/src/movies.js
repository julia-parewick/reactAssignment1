import './App.css';
import {useState, useEffect} from 'react';
import {App2} from './submit';
import {Link} from 'react-router-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
<<<<<<< HEAD

function MovieList(props){  

  const delEntry = (index) =>{
    let newArray = props.allmovies.filter(function(val,i,arr){return i!=index});
    props.setMovies(newArray)
  }
  return(
    <div>
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
      <table>
        <tbody>
        <tr><th>Movies</th><th>Release Date</th><th>Actors</th><th>Poster</th><th>Rating</th><th></th></tr>
        {props.allmovies.map((m,i)=><tr key={i}><td key="1">{m.title}</td><td key="2">{m.releaseDate}</td><td key="3">{m.actors}</td><td key="4"><img src={m.img} width="100px" alt={m.title}></img></td><td key="5">{m.rating}/5</td><td key="6"><button onClick={()=>{delEntry(i)}}>Del</button></td></tr>)}</tbody>
      </table>
    </div>
  )
}


function App() {

=======

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

>>>>>>> ec298b3db01c8fff0de45f8f5251c5e285b415ca
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
<<<<<<< HEAD
        <Route path="/" element={<MovieList allmovies={(movies)} setMovies={setMovies}/>}/>
=======
        <Route path="/" element={<MovieList allmovies={(movies)}/>}/>
>>>>>>> ec298b3db01c8fff0de45f8f5251c5e285b415ca
        <Route path="/submit" element={<App2 movies={movies} setMovies={setMovies}/>}/>
    </Routes>
  );
}

export default App;
