import React, { useState } from 'react'
import "./Dashboard.css"
import Notes from '../../Components/Notes/Notes';
import Lecture from '../../Components/Lecture/Lecture';
import Meeting from '../../Components/Meeting/Meeting';
export default function DashBoard() {
    const [punchIn, setPunchIn] = useState("")

    const punch = () => {
        // const d = new Date();
        // let time = d.getTime();
        // const minute = 1000 * 60;
        // const hour = minute * 60;

        var d = new Date();
        var hr = d.getHours(); // => 9
        var minute = d.getMinutes(); // =>  30
        var sec = d.getSeconds(); // => 51

        if (hr == 0) {
            hr += 12
        }
        console.log(hr, minute, sec)
        setPunchIn(`${hr}:${minute}`)
    }
    return (
        <div className="dashboard">
            <div className='dashboard-container'>

                <div className="dashboard-left">
                    <div className="profile-container">
                        <div className="profile-pic">
                        </div>
                        <div className="profile-title">
                            <h3>Ritesh Borikar</h3>
                            <h5>Ast. Professor</h5>
                        </div>
                        <div className="profile-links">
                            <i className="ri-mail-open-line"></i>
                            <i className="ri-tent-line"></i>
                        </div>
                        <div className="inout-detail">
                            <h3>Punch In:
                                <span>{punchIn} AM</span>
                            </h3>
                        </div>
                        <div className="profile-inout">
                            <div className="punchInBtn" onClick={punch}>
                                Punch In
                            </div>
                            <div className="punchOutBtn">
                                Punch Out
                            </div>
                        </div>
                        <div className="profile-detail">
                            <div className="detail">
                                <div className="detail-title">
                                    Lectures
                                </div>
                                <div className="detail-num">
                                    4
                                </div>
                            </div>
                            <div className="detail">
                                <div className="detail-title">
                                    Meetings
                                </div>
                                <div className="detail-num">
                                    5
                                </div>
                            </div>
                        </div>
                    </div>
                    <Notes />
                </div>
                <div className="dashboard-right">
                    <div className="Lecture">
                        <h2>Lectures: </h2>
                        <Lecture />
                    </div>
                    <div className="meeting">
                        <h2>Meeting: </h2>
                        <Meeting />
                    </div>
                </div>
            </div>

        </div>
    )
}
