import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import Home from './Home';
import Dashboard from './Components/Dashboard';
import NewTask from './Components/NewTask';
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {user.token != null &&
            <>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path='/createTask' element={<NewTask/>}/>
            </>
          }          
        </Routes>
      </Router>
    </div>
  );
}
export default App;