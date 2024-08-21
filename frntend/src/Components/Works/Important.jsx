import React from 'react'
import { useSelector } from 'react-redux'

function Important({important}) {
  console.log(important);
  
  
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-bold text-[#FFF]'>Important</h1>
    {important.length > 0 ? (
        important.map((task) => (
          <div key={task._id}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <p>{task.time}</p>
          </div>
        ))
      ) : (
        <p>No tasks found within the next 7 hours</p>
      )}
    </div>
  )
}

export default Important