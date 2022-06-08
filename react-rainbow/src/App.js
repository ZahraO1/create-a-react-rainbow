import React, {useState} from 'react';

import './App.css';
//import ColorBlock function from './ColorBlock.js'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  let [colors,setColors] = useState(['violet','blue','lightblue','green','greenyellow','yellow','orange','red'])
  let colorMap = colors.map((color,i)=>{
    return(
      //color is props.color
      //sending props to ColorBlock component
      //ColorBlock component lists the colors
      <ColorBlock key={i} color={color}/>
    )
  })
  
  const addColor = (newColor) =>{
    //adds the new color with the previous colors
    setColors([...colors, newColor])
    console.log(colors)
  }
  return(
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  )
}

export default App;
