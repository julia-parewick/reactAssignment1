import './App.css';
import {useState, useEffect, useReducer} from 'react';

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
        
      </p>
    </section>
  )
}
// array destructuring
// const [dishOne, dishTwo, dishThree]= [
//   "salad",
//   "sandwich",
//   "soup"
// ];

// console.log(dishOne);

function FoodList(props){
  return(
    <h1>{props.food.map(f=><li>{f}</li>)}</h1>
  )
}


function App({library}) {
  const [emotion, setEmotion]=useState("happy");

  useEffect(()=>{
    console.log(`${emotion} right now`)
  }, [emotion]);

 

  let [dishes,setFood]=useState([
    "salad",
    "sandwich",
    "soup"
  ])

  useEffect(()=>{
    console.log(dishes)
  }, [dishes])

  // const [checked, setChecked]=useState(false);
  const [checked, setChecked]=useReducer(checked=>!checked);


  return (
    
    <div className="App">
      <h1>Hello from {library}</h1> 
      <h2>Current emotion is {emotion}</h2>
      <button onClick={()=>setEmotion("sad")}>Sad</button>
      <button onClick={()=>setEmotion("happy")}>Happy</button>

      {/* <input type="checkbox" value={checked} onChange={()=>setChecked((checked)=>!checked)}/> can be replaced with useReducer*/}
      <input type="checkbox" value={checked} onChange={setChecked}/>

      <label>{checked ? "Checked":"not Checked"}</label>
      
      <Header word="Hello"/> 
      <Main year={new Date().getFullYear()}/>
      <FoodList food={(dishes)}></FoodList>
      <button onClick={()=>{console.log("I'm full now"); setFood([])}}>Eat food</button>
      <button onClick={()=>{console.log("Show me the Desert Menu!"); setFood(['cake','pie','smoothie'])}}>Order desert</button>
      <Footer />
    </div>
  );
}

export default App;
