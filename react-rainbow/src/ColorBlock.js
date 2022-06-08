import React from 'react'

function ColorBlock(props){
    return(
        <div 
            className = "colorBlock"
            //interpolate attribute values
            style = {{'backgroundColor':props.color}}>
                <p>{props.color}</p>
        </div>
    )
}

//export
export default ColorBlock