import React from 'react'
import '../App.css'

function Apod(props) {
    
    const { copyright, date, explanation, title, url } = props.photo
    debugger
    return (
        <section>
            <h2>Photo of the Day</h2>
            <h3>Title: {title}</h3>
            <img src={url} alt={title} />
            <p>{explanation}</p>
            <p>{copyright}</p>
            <p>{date}</p>
        </section>
        
    )
}
export default Apod
