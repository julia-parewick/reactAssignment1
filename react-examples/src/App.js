import './App.css';

function Header(props){
  console.log(props);
  return(<header>
    <h1>
      {props.word} World
    </h1>
  </header>
  );
}

function Main(props){
  return(<section>
    <p>
      Hello World. The year is {props.year}
    </p>
  </section>
  );
}

function Footer(){
  return(
    <section>
      <p>
        Goodbye!
      </p>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Header word="Hello"/> 
      <Main year={new Date().getFullYear()}/>
      <Footer />
    </div>
  );
}

export default App;
