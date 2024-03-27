import { useState } from 'react';
import './App.css'

function App() {

let [counter, setCounter] =useState(1)



 const addValue=()=>{
    if(counter<20){
      setCounter(counter+1)
    }else{
      setCounter(1)
    }
    
 }

 const removeValue=()=>{
 
   if(counter >0){
    setCounter(counter-1);
   }else{
   setCounter(1)
   }
 }

 




  return (
    <>
     <h1>hello,Let's Learn Hooks    </h1>
     <h2>counter value : 1 </h2>
    <h3>Value is :{counter} </h3>
     <button onClick={addValue}>Add Value </button>
     <br /> <br />
     <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
