import axios from 'axios'
import React,{useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewTask() {
    const [task, setTask] = useState({ name: '', description: '', time: '' });
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const createNewTask = (e) => {
        e.preventDefault()
        if (!task.name ||   !task.time) {
            console.log('Please fill in all fields');
            return;
            
        }
        axios.post('http://localhost:4000/api/auth/createTask',task,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response);
            setTask({ name: '', description: '', time: '' });
            navigate('/dashboard')
        })
        .catch((error) => {
            console.log(error);
        });
    }
  return (
    <div className='w-full h-screen bg-[#629994] flex items-center justify-center'>
        <form onSubmit={createNewTask} className='card w-1/3 h-1/3 flex flex-col gap-4 items-center justify-center bg-[#fff] rounded p-4'>
            <input type="text" name='task' className='w-full h-1/6 rounded bg-slate-200 text-center' placeholder='Enter task' required value={task.name} onChange={(e) => setTask({ ...task, name: e.target.value })}/>
            <input type="text" name='description' className='w-full h-1/6 rounded bg-slate-200 text-center' placeholder='Enter description' value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} />
            <input type="time" name='time' className='w-1/6 h-1/6 rounded bg-slate-200 text-center' placeholder='Completed within' required value={task.time} onChange={(e) => setTask({ ...task, time: e.target.value })}/>
            <button type="submit" className='w-1/6 h-1/6 rounded bg-slate-200 text-center'>Add Task</button>
        </form>
    </div>
  )
}

export default NewTask