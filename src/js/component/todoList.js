import React, { useState, useEffect } from "react";

function TodoList () {

    const [taskList, setTaskList] = useState([])
  
    const deleteAll = () => {
        setTaskList([]);
    }

    const taskDone = (index) => {
        setTaskList(taskList.map((task, i) => {
          if (i === index) {
            return { ...task, done: !task.done };
          } else {
            return task;
          }
        }));
      };

    const countUncompletedTasks = () => {
        return taskList.filter((task) => !task.done).length;
      };
    

    return(
        <div className="container d-flex justify-content-center flex-column text-center mt-5">
            <h1 className="my-3">TO DO LIST</h1>
            <input  
                type="text" 
                className="form-control text-wrap" 
                placeholder="Write your task here!"
                onKeyUp={(e) => {
                    if(e.key === "Enter" && e.target.value.trim() !=""){
                        setTaskList([...taskList, { label: e.target.value, done: false }])
                        e.target.value = "";
                    }}
                }  
            />
            <ul className="list-group">
                {taskList.map((element, index) => {
                return (
                    <li key={index} 
                    className={`list-group-item rounded-0 border d-flex justify-content-between align-items-center `}>                  
                            <span onClick={() => taskDone(index)} className={element.done ? "text-decoration-line-through" : ""} >{element.label} </span>
                            <i type='button' onClick={() => {
                                setTaskList(taskList.filter((e , i) => i != index))
                            }}
                            className="fa-solid fa-trash">
                            </i>
                    </li>
                    );
                    })}
                    <li className="list-group-item rounded-0 border text-start text-muted text-wrap fst-italic fs-6">   
                        <small>      
                            {countUncompletedTasks()}{" "}
                            {countUncompletedTasks() === 1 ? "task" : "tasks"} left
                        </small>    
                    </li>
            </ul>
            <div className="row justify-content-center">
                <button type="button" className="btn btn-warning p-2 mt-3 col-md-4" onClick={deleteAll}>Delete all TASK</button>
            </div>
        </div>
    )
}

export default TodoList;