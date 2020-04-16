import React from 'react'
import '../App.css'
import Video from './Video'

function Apod(props) {
    
    const { copyright, date, media_type, title, url } = props.photo

    return (
        <div className='right'>
        <section>
            <h3>{title}</h3>
            {media_type === 'image' ? 
            <img src={url} alt={title} /> : 
            <Video><iframe className='video' title={title} src={url} frameBorder="0"/></Video> }
            
            <div className='byline'>            
                <span>{copyright}</span>
                <span>{date}</span>
            </div>
        </section>
        </div>
        
    )
}
export default Apod
