import React from "react";
import SearchBar from "./SearchBar";
import Urgent from "./Works/Urgent";
import Important from "./Works/Important";
import HaveToDo from "./Works/HaveToDo";
import Skippable from "./Works/Skippable";
import { useSelector } from "react-redux";

function Hero({user}) {
  
  const works = useSelector((state) => state.task.tasks).filter((task) => task.completed === false&&task.createdBy===user.email);
  console.log(works);

  const urgent = [];
  const important = [];
  const haveToDo = [];
  const skippable = [];

  const currentTime = new Date();
  const today = new Date().toISOString().split('T')[0];

  const filteredTasks = works.filter((task) => {
    const taskDate = new Date(task.createdAt).toISOString().split('T')[0];
    if (taskDate === today) {
      
      const [hours, minutes] = task.time.split(":");
      const taskTime = new Date(currentTime);
    taskTime.setHours(hours);
    taskTime.setMinutes(minutes);
    const timeDifference = (taskTime - currentTime) / (1000 * 60 * 60);
    if (timeDifference>0&&timeDifference<4) {
      urgent.push(task);
    }
    else if(timeDifference>4&&timeDifference<8){
      important.push(task);
    }
    else if(timeDifference>8&&timeDifference<12){
      haveToDo.push(task);
    }
    else if(timeDifference>12&&timeDifference){
      skippable.push(task);
    }
  }
  });
  


  return (
    <div className="h-screen w-full bg-transparent flex flex-col items-center justify-center">
      <div className="h-1/6 w-full border-2 text-center">
        <h1
          className="text-6xl text-white font-extrabold"
          style={{
            background: "linear-gradient(to right, #666666, #629994)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Good Morning {user.name}
        </h1>
      </div>
      <div className="h-1/6 w-full border-2">
        <SearchBar />
      </div>
      <div className="h-2/3 w-full border-2 overflow-auto">
        <div className="h-full w-full  flex gap-4 justify-evenly items-center rounded-xl" style={{background: 'linear-gradient(180deg, #629994 0%, #629994 50%)'}}>
            <div className=" w-1/4 h-full "><Urgent urgent={urgent}/></div>
            <div className=" w-1/4 h-full"><Important important ={important}/></div>
            <div className=" w-1/4 h-full"><HaveToDo haveToDo={haveToDo}/></div>
            <div className=" w-1/4 h-full"><Skippable skippable={skippable}/></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
