import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Apod from './Apod'
import Extras from './Extras'
import "../App.css"

const url = 'https://api.nasa.gov/planetary/apod'
const api_key = 'p0Py70FmCsRdIRiWSWWNKce1NHtSdQdFCAHzqYG2'
const date = '2020-02-25'

function Main() {

    const [podData, setPodData] = useState(null)

useEffect(() => {
    axios.get(`${url}?api_key=${api_key}&date=${date}`)
        .then( res => {
            setPodData(res.data)
        })
        .catch( err => {
            console.log(err)
        })
}, [])


return (
    <div className='wrapper'>
        {podData && <Extras photo={podData}/>}
        {podData && <Apod photo={podData}/>}
    </div>
)
    
}

export default Main