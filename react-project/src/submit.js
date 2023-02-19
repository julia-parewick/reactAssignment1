import './App.css';
import {useState, useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
      <Container fluid='sm'>
        <form onSubmit={submit}>
          <Row><Col><label>Title: </label></Col><Col><input ref={movieTitle} type="text"/></Col></Row>
          <Row><Col><label>Release Date: </label></Col><Col><input ref={releaseDate} type="date"/></Col></Row>
          <Row><Col><label>Actors (Separate names with ','): </label></Col><Col><input ref={actors} type="text"/></Col></Row>
          <Row>
            <Col>
              <label>Image:</label>
            </Col>
            <Col>
              <select id="posterInput" onChange={enterURL}>
                <option value="placeholder">Placeholder</option>
                <option value="imageLink">Provide URL</option>
              </select>
              <span id="poster" className="hide"><input ref={poster} type="text"/></span>
            </Col>
          </Row>
          <Row><Col><label>Rating /5: </label></Col><Col><input ref={rating} type="text"/></Col></Row>
          <button>ADD</button>
        </form>
      </Container>
    </div>
  );
}
