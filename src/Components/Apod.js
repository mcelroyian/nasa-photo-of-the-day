import React from 'react'
import '../App.css'

function Apod(props) {
    
    const { copyright, date, explanation, title, url } = props.photo

    return (
        <section>
            <h3>{title}</h3>
            <img src={url} alt={title} />
            <div className='byline'>            
                <span>{copyright}</span>
                <span>{date}</span>
            </div>
        </section>
        
    )
}
export default Apod
