import './App.css';
import {useState, useEffect} from 'react';
import {App2} from './submit';

function Header(){
  return(<header>
    <h1>
      Movie Reviews
    </h1>
    <h2><a href='./public/index'>Reviews</a> <a href='./public/submit'>Submit</a></h2>
  </header>
  )
}

function Main(props){
  return(<section>
    <p>

    </p>
  </section>
  )
}

function Footer(){
  return(
    <section>
      <p>
        
      </p>
    </section>
  )
}


function MovieList(props){
  console.log(props.allmovies)

  return(
    // <tr>{props.movies.map((m)=>m.map((r,i)=><td key={i}>{r}</td>))}</tr>
    <tbody><tr><td>Movies</td></tr>{props.allmovies.map((m,i)=><tr key={i}><td key={i}>{m.title}</td></tr>)}</tbody>
    )
}


function App({library}) {
  let [movies, setMovies] = useState(null);

  useEffect(()=>{
    // load data from json
    fetch("./movies.json")
    .then(res=>res.json())
    .then(setMovies)
    .catch(e=>console.log(e.message))
  },[])

  if(movies==null){
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <Header />
      <table>
        <MovieList allmovies={(movies)}></MovieList>
      </table>
      <App2 movies={movies} setMovies={setMovies}/>
    </div>
  );
}

export default App;
