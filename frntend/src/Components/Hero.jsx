import React from "react";
import SearchBar from "./SearchBar";
import Urgent from "./Works/Urgent";
import Important from "./Works/Important";
import HaveToDo from "./Works/HaveToDo";
import Skippable from "./Works/Skippable";

function Hero() {
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
          Good Morning Ankur
        </h1>
      </div>
      <div className="h-1/6 w-full border-2">
        <SearchBar />
      </div>
      <div className="h-2/3 w-full border-2">
        <div className="h-1/6 w-full  flex gap-4 justify-evenly items-center rounded-xl" style={{background: 'linear-gradient(180deg, #629994 0%, #629994 50%)'}}>
            <div><Urgent/></div>
            <div><Important/></div>
            <div><HaveToDo/></div>
            <div><Skippable/></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
