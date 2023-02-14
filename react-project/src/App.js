import './App.css';
import {useState, useEffect} from 'react';

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
  return(
    <tr>{props.movies.map((m)=>m.map((r,i)=><td key={i}>{r}</td>))}</tr>

    )
}

let movieRatings = []

function App({library}) {
  return (
    <div className="App">
      <Header />
      <table>
        <tbody>
        <tr><td>Movie</td><td>Rating</td></tr>
        <MovieList movies={(movieRatings)}></MovieList>
        </tbody>
      </table>
    </div>
  );
}

export default App;
