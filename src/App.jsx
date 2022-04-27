import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "./redux/counterSlice";


function App() {
  const dispatch = useDispatch();
  const {count} = useSelector(state=>state.counter);

  return (
    <div className="App">
      <header className="App-header" align="center">
        
        <h1>The Count is : {count}</h1>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            increment
          </button>&ensp;
          <button type="button" onClick={() => dispatch(decrement())}>
            decrement
          </button>&ensp;
          <button type="button" onClick={() => dispatch(incrementByAmount(5))}>
            increment by : 5
          </button>
        </p>
        
      </header>
    </div>
  )
}

export default App
