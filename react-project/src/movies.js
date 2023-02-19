import './App.css';
import {useState, useEffect} from 'react';
import {App2} from './submit';
import {Link} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

function Header(){
  return(
    <Container fluid='true'>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Movie Reviews</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/">View Movies</Nav.Link>
            <Nav.Link href="/submit">Submit</Nav.Link>
          </Nav>
        </Navbar>
    </Container>
  )
}

function MovieList(props){  

  const delEntry = (index) =>{
    let newArray = props.allmovies.filter(function(val,i,arr){return i!=index});
    props.setMovies(newArray)
  }
  return(
    <body>
      <Container fluid='true'>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Movie Reviews</Navbar.Brand>
          <Nav className="me-auto">
          <Col sm={10}><Link to="/">View Movies</Link></Col>
          <Col><Link to="/submit">Submit</Link></Col>
          </Nav>
        </Navbar>
    </Container>
      <Container fluid='sm'>
        
        <Table bordered>
          <tbody>
          <tr><th>Movies</th><th>Release Date</th><th>Actors</th><th>Poster</th><th>Rating</th><th></th></tr>
          {props.allmovies.map((m,i)=><tr key={i}><td key="1">{m.title}</td><td key="2">{m.releaseDate}</td><td key="3">{m.actors.map(n=><p>{n}</p>)}</td><td key="4"><img src={m.img} width="100px" alt={m.title}></img></td><td key="5">{m.rating}/5</td><td key="6"><button onClick={()=>{delEntry(i)}}>Del</button></td></tr>)}</tbody>
        </Table>
      </Container>
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
        <Route path="/" element={<MovieList allmovies={(movies)} setMovies={setMovies}/>}/>
        <Route path="/submit" element={<App2 movies={movies} setMovies={setMovies}/>}/>
    </Routes>
  );
}

export default App;
