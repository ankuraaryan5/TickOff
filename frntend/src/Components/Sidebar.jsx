import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login, logout} from '../Store/userSlice';
function Sidebar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout( { token: null, user: null }));
    console.log("Logout successful");
  }
  return (
    <div className='w-full h-screen bg-transparent flex flex-col' style={{borderRight: '2px solid #629994'}}>
    <div className='h-1/3 ' style={{borderBottom: '2px solid #629994'}}>
        photo 
        name
    <Link to={'/'}>Go Back</Link>
    </div>
    <div className='h-1/3' style={{borderBottom: '2px solid #629994'}}>
    <div className='h-1/4' style={{borderBottom: '2px solid #629994'}}> <h3>Your Score</h3> </div>
    <div className='h-1/4' style={{borderBottom: '2px solid #629994'}}> <h3>Feed</h3> </div>
    <div className='h-1/4' style={{borderBottom: '0.5px solid #629994'}}> <h3>Trending</h3> </div>
    <div className='h-1/4' style={{borderBottom: '0.5px solid #629994'}}>
    <Link to={'/createTask'} >
    <button className='h-full w-full text-center text-white rounded' style={{background: 'linear-gradient(180deg, #629994 0%, #629994 69%)'}} >
        Create New task
    </button>
    </Link>
    </div>
    </div>
    <div className='h-1/3 flex flex-col items-center justify-end'>
        <Link to={'/'} className='h-1/5 w-full text-center text-white rounded' style={{background: 'linear-gradient(180deg, #629994 0%,  #629994 89%)'}}><button className='text-center h-full' style={{color: '#fff'}} onClick={handleLogout}>Logout</button>
        </Link>
    </div>
    </div>
  )
}

export default Sidebar