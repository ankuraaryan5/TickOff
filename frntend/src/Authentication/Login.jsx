import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [input, setInput] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!input.email || !input.password) {
            setError('Please fill in both fields.');
            return;
        }

        axios.post('http://localhost:4000/api/auth/login', input)
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((error) => {
                console.error('Login error:', error);
                setError('Login failed. Please check your credentials and try again.');
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
        if (error) setError('');
    };

    return (
        <div
      className="grid place-items-center h-screen"
      style={{ background: 'linear-gradient(180deg, #A3FFF6 5%, #629994 100%)' }}
    >
      <div className="bg-white p-16 rounded-3xl shadow-2xl ">
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <h1 className={" text-3xl font-bold text-center"} style={
            {
              background: 'linear-gradient(180deg, #629994 0%, #666666 107.69%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              }
          }>Welcome to TickOff!</h1>
          
          <input
            type="email"
            name="email"
            className="rounded border-2 p-2"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="rounded border-2 p-2"
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="rounded border-2 p-2"
            style={{
              border: '1px solid',
              background: '#AFF4C6',
              color: '#02542D',
            }}
          >
            Login
          </button>
          <p>
            Don't have an account? {' '}
            <button type="button" className="text-blue-600">
              <Link to="/signup">SignUp</Link>
            </button>
          </p>
        </form>
      </div>
    </div>
    );
};

export default Login;
