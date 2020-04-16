import React from 'react'
import '../App.css'

function Extras(props) {

    const { explanation } = props.photo

    return (
        <div className='left'>
            <h3>Photo of the Day</h3>
            <p className='intro-text'>{explanation}</p>
            <button>See Another Photo</button>
        </div>
    )
}
export default Extras
