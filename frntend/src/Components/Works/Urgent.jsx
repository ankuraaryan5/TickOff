import React from "react";
import { useSelector } from "react-redux";

function Urgent() {
  const works = useSelector((state) => state.task.tasks);
  console.log(works);
  const currentTime = new Date();

  // Filter tasks where the task time is less than 4 hours from now
  const filteredTasks = works.filter((task) => {
    // Create a Date object for the task's time
    const [hours, minutes] = task.time.split(":");
    // console.log("task time in hours and minutes -> ", hours,":", minutes);
    const taskTime = new Date(currentTime);
    // console.log("current time -> ", taskTime);
    taskTime.setHours(hours);
    taskTime.setMinutes(minutes);
    // const updatedHours = taskTime.getHours();
    // const updatedMinutes = taskTime.getMinutes();
    // console.log("Task time (hours):", updatedHours);
    // console.log("Task time (minutes):", updatedMinutes);
    // console.log("Task time:", taskTime.toLocaleTimeString());
    const timeDifference = (taskTime - currentTime) / (1000 * 60 * 60); // milliseconds to hours
    // console.log("timeDifference -> ", timeDifference);

    // Return true if the task's time is less than 3 hours from now
    return timeDifference > 0 && timeDifference < 3;
  });

  console.log(filteredTasks)

  const today = new Date().toISOString().split('T')[0];
  const tasksToday = filteredTasks.filter(task => {
    const taskDate = new Date(task.date).toISOString().split('T')[0];
    return taskDate === today;
  });

  return (
    <div className="urgent flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#FFF]">Urgent</h1>
      {tasksToday.length > 0 ? (
        tasksToday.map((task) => (
          <div key={task._id}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <p>{task.time}</p>
          </div>
        ))
      ) : (
        <p>No tasks found within the next 3 hours</p>
      )}
    </div>
  );
}

export default Urgent;
