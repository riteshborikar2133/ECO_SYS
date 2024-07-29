import React, { useEffect, useState } from 'react'
import "./Lecture.css"

export default function Lecture() {
    const [time,setTime] = useState()
    const gettime = () =>{
        const time = new Date()
        let hr = time.getHours()
        let min = time.getMinutes()
        console.log(hr)
        setTime(`${hr}:${min}`)
    }

    useEffect(()=>{
        gettime()

    },[])

    return (
        <div className="Lecture-container">
            <div className="Lecture-card">
                <p>On Going</p>
                <h3>Maths</h3>
                <p>Time: {time}</p>
            </div>
            <div className="Lecture-card">
                <p>Next Lecutre</p>
                <h3>DAA</h3>
                <p>Time: 10:30 to 11:30</p>
            </div>
        </div>
    )
}
