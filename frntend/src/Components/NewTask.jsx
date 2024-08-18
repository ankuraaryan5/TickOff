import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function NewTask() {
    const [task, setTask] = useState({ name: '', description: '', date: new Date(), time: '', visibility: 'private', createdBy: '' });
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const user = useSelector((state) => state.user);

    const createNewTask = (e) => {
        e.preventDefault();
        task.createdBy = user.user.email;
        if (!task.name || !task.time) {
            console.log('Please fill in all fields');
            return;
        }
        
        axios.post('http://localhost:4000/api/auth/createTask', task, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            console.log(response);
            setTask({ name: '', description: '', time: '', visibility: 'private', createdBy: '', completed: false, date: new Date() });
            navigate('/dashboard');
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className='w-full h-screen bg-[#629994] flex items-center justify-center'>
            <form onSubmit={createNewTask} className='card w-full max-w-md bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6'>
                <input 
                    type="text" 
                    name='task' 
                    className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
                    placeholder='Enter task' 
                    required 
                    value={task.name} 
                    onChange={(e) => setTask({ ...task, name: e.target.value })} 
                />
                <input 
                    type="text" 
                    name='description' 
                    className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
                    placeholder='Enter description' 
                    value={task.description} 
                    onChange={(e) => setTask({ ...task, description: e.target.value })} 
                />
                <input 
                    type="time" 
                    name='time' 
                    className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
                    placeholder='Completed within' 
                    required 
                    value={task.time} 
                    onChange={(e) => setTask({ ...task, time: e.target.value })} 
                />
                <div className='flex items-center'>
                    <input 
                        type="checkbox" 
                        name='visibility' 
                        className='mr-2' 
                        checked={task.visibility === 'public'}
                        onChange={(e) => setTask({ ...task, visibility: e.target.checked ? 'public' : 'private' })} 
                    />
                    <label className='text-gray-700'>Make this task public</label>
                </div>
                <button type="submit" className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300'>
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default NewTask;
