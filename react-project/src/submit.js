import './App.css';
import {useState, useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';


function Header(){
  return(<header>
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
  )
}

export function App2(props) {

  const movieTitle = useRef();

  const submit = (evt)=>{
    evt.preventDefault();
    let movieData = [];
    props.movies.forEach(m=>{
      movieData.push(m);
    })
    const title = movieTitle.current.value;
    movieData.push({"title":title});
    props.setMovies(movieData);
    // alert(title);
    movieTitle.current.value="";
  }
  
  return (
    <div className="App">
      <Header />
      <form onSubmit={submit}>
        <input ref={movieTitle} type="text"/>
        <button>ADD</button>
      </form>
    </div>
  );
}
