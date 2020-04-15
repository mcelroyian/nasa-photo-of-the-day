import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Apod from './Apod'
import "../App.css"

const url = 'https://api.nasa.gov/planetary/apod'
const api_key = 'p0Py70FmCsRdIRiWSWWNKce1NHtSdQdFCAHzqYG2'

function Main() {

    const [podData, setPodData] = useState(null)

useEffect(() => {
    axios.get(`${url}?api_key=${api_key}&date=2020-04-15`)
        .then( res => {
            setPodData(res.data)
        })
        .catch( err => {
            console.log(err)
        })
}, [])

return (
    <div className='wrapper'>
        <div>
            <div><h2>Intro</h2></div>
            <div><h2>Extraz</h2></div>
        </div>
        <div>
            {podData && <Apod photo={podData}/>}
        </div>
    </div>
)
    
}

export default Main