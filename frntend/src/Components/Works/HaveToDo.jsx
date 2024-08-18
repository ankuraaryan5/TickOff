import React from 'react'
import { useSelector } from 'react-redux'
function HaveToDo() {
  const works = useSelector((state) => state.task.tasks);
  console.log(works);
  const currentTime = new Date();
  const filteredTasks = works.filter((task) => {
    const [hours, minutes] = task.time.split(":");
    const taskTime = new Date(currentTime);
    taskTime.setHours(hours);
    taskTime.setMinutes(minutes);
    const timeDifference = (taskTime - currentTime) / (1000 * 60 * 60);
    return timeDifference > 7 && timeDifference < 12;
  });

  console.log(filteredTasks);

  return (
    <div className='w-full h-full bg-transparent flex flex-col items-center justify-center'>
    <h1 className='text-center font-bold text-white text-3xl '> Have to do</h1>
    {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
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