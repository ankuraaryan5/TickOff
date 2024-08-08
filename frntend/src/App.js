import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import Home from './Home';
import Dashboard from './Components/Dashboard';
import NewTask from './Components/NewTask';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem('token');
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {token && 
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
