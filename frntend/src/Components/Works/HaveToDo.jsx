import React from 'react'
import { useSelector } from 'react-redux'
function HaveToDo({haveToDo}) {
  console.log(haveToDo);
  
  

  return (
    <div className=' flex flex-col items-center justify-center'>
    <h1 className='text-center font-bold text-white text-3xl '> Have to do</h1>
    {haveToDo.length > 0 ? (
        haveToDo.map((task) => (
          <div key={task._id}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <p>{task.time}</p>
          </div>
        ))
      ) : (
        <p>No tasks found within the next 12 hours</p>
      )}
    </div>
  )
}

export default HaveToDo