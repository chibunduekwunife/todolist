import React from 'react'

function TaskWindow ({ task, deleteTask }) {

    const handleClick = (index) => {
        deleteTask(index)
    }

    return (
        <div>
            <h1>My Todo List</h1>
            {task.length > 0 ? (
                taskList.map((task, index) => (
                    <div key={index}>
                        {task}
                        <button onClick={() => handleClick(index)}>X</button>
                    </div>
                ))
            ) : (
                <p>No tasks added yet</p>
            )}
            
        </div>
    )
}

export default TaskWindow