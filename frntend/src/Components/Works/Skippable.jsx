import React from 'react'
import { useSelector } from 'react-redux'

function Skippable() {
  const works = useSelector((state) => state.task.tasks);
  console.log(works);
  const currentTime = new Date();
  const filteredTasks = works.filter((task) => {
    const [hours, minutes] = task.time.split(":");
    const taskTime = new Date(currentTime);
    taskTime.setHours(hours);
    taskTime.setMinutes(minutes);
    const timeDifference = (taskTime - currentTime) / (1000 * 60 * 60);
    return timeDifference > 12 && timeDifference < 24;
  });

  console.log(filteredTasks);
  return (
    <div className='flex flex-col'>
      <h1 className='text-center text-white font-bold text-3xl'> Skippable</h1>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
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