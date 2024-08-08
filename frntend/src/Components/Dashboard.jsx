import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import axios from "axios";

function Dashboard() {
  const fetchTask = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/auth/getAllTask`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching task:", error.response.data);
    }
  };

  useEffect(() => {
    
    fetchTask(); 
  })
  return (
    <div
      className="flex"
      style={{
        background: "linear-gradient(180deg, #A3FFF6 5%, #629994 100%)",
        height: "100vh",
      }}
    >
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Hero />
      </div>
    </div>
  );
}

export default Dashboard;
