import React from 'react'
import { useSelector } from 'react-redux'

function Skippable({skippable}) {
  console.log(skippable);
  
  return (
    <div className='flex flex-col'>
      <h1 className='text-center text-white font-bold text-3xl'> Skippable</h1>
      {skippable.length > 0 ? (
        skippable.map((task) => (
          <div key={task._id}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <p>{task.time}</p>
          </div>
        ))
      ) : (
        <p>No tasks found after the next 12 Hours</p>
      )}
    </div>
  )
}

export default Skippable