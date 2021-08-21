 import './App.css';
import { useState } from 'react';



function App() {
  
  let [num,setNum]=useState(0)

  const increment=()=>
  {

    setNum(num+1)

  }
  const decrement=()=>
  {

    setNum(num-1)
    
  }
  /*JSX*/
  return (
    
    
    <div id="main_container">
      <h1 className="adSub">Never Miss Your  Count Again !!!</h1>
      <div id="btn_c1">
        <button class="button button_one" onClick={increment}>+</button>
      </div>
      <h1 id="number">{num}</h1>
           <div id="btn_c2">
        <button class="button button_two" onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
