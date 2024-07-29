import React, { useRef, useState } from 'react'
import "./Notes.css"
export default function Notes() {

    const [task, setTask] = useState()
    const [taskList, setTaskList] = useState([])
    const addTask = () => {
        setTaskList([...taskList, task])
        console.log(taskList)
    }
    return (

        <>
            <div className="notes-container">
                <h3>Notes</h3>
                <input type="text" placeholder='Enter Task'
                    onChange={(e) => {
                        setTask(e.target.value)
                    }}
                />
                <button type="button" onClick={addTask}>
                    Add
                </button>
                <div className="task-container">
                    {
                        (taskList)?(
                            taskList.map((item,index)=>{
                                return(
                                    <li key={index}>{item}</li>
                                )
                            })
                        ):(
                            <p>no task</p>
                        )
                    }
                </div>
            </div>
        </>
    )
}
