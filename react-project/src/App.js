import './App.css';
import {Header} from './header';
import {useState, useEffect} from 'react';
import {Form} from './Form';
import {Routes,Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function MovieList(props){  

  return(
    <div>
      <Header />
      <Container fluid='sm'>
        <Table bordered>
          <tbody>
            <tr><th>Movies</th><th>Release Date</th><th>Actors</th><th>Poster</th><th>Rating</th><th></th></tr>
            {props.allmovies.map((m,i)=>
            <tr key={i}>
              <td key="1">{m.title}</td>
              <td key="2">{m.releaseDate}</td>
              <td key="3">{m.actors.map((n,ix)=><p key={ix}>{n}</p>)}</td>
              <td key="4"><img src={m.img} width="100px" alt={m.title}></img></td>
              <td key="5">{+m.rating}/5</td>
              <td key="6">
                <form method='post' action="/api/delete">
                  <input name='data' class='hide' type='TEXT' value={[m.title,m.releaseDate,m.actors,m.img,m.rating]}/>
                  <input type='submit' value='Del'/>
                </form>
              </td>
            </tr>)}
          </tbody>

        </Table>
      </Container>
    </div>
  )
}


function App() {

  let [movies, setMovies] = useState(null);

  useEffect(()=>{
    // load data from json
    fetch('/api/movies')
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
        <Route path="/submit" element={<Form movies={movies} setMovies={setMovies}/>}/>
    </Routes>
  );
}

export default App;
