import React,{useState} from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit=(e) =>{
        //eliminating default behavior of form submittal
        e.preventDefault()

        //addColor functionf from './App.js'
        props.addColor(input)
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input
                    type="text"
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm