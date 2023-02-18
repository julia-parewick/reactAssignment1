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
  const releaseDate = useRef();
  const actors = useRef();
  const poster = useRef();
  const rating = useRef();

  const submit = (evt)=>{
    evt.preventDefault();
    let movieData = [];
    props.movies.forEach(m=>{
      movieData.push(m);
    })
    const title = movieTitle.current.value;
    const date = releaseDate.current.value;
    const names = actors.current.value.split(",");
    const image=(document.getElementById("posterInput").value)=="placeholder" ? "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg":poster.current.value;

    const score = rating.current.value;
    movieData.push({"title":title,"releaseDate":date,"actors":names,"img":image,"rating":score});
    props.setMovies(movieData);
    alert(title+" added!");
    movieTitle.current.value="";
    releaseDate.current.value="";
    actors.current.value="";
    document.getElementById('poster').current.value="";
    rating.current.value="";
  }

  const enterURL = (evt)=>{
    evt.preventDefault();
    document.getElementById('poster').classList.toggle('hide');
  }
  
  return (
    <div className="App">
      <Header />
      <form onSubmit={submit}>
        <p><label>Title:</label><input ref={movieTitle} type="text"/></p>
        <p><label>Release Date:</label><input ref={releaseDate} type="date"/></p>
        <p><label>Actors (Separate names with ',')</label><input ref={actors} type="text"/></p>
        <p>
          <label>Image:</label><select id="posterInput" onChange={enterURL}>
            <option value="placeholder">Placeholder</option>
            <option value="imageLink">Provide URL</option>
          </select>
          <span id="poster" className="hide"><input ref={poster} type="text"/></span>
        </p>
        <p><label>Rating /5:</label><input ref={rating} type="text"/></p>
        <button>ADD</button>
      </form>
    </div>
  );
}
