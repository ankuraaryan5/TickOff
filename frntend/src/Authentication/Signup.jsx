import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const [input, setInput] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/auth/signup', input)
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  

  return (
    <div
      className="grid place-items-center h-screen"
      style={{ background: 'linear-gradient(180deg, #A3FFF6 5%, #629994 100%)' }}
    >
      <div className="bg-white p-16 rounded-3xl shadow-2xl w-11/12 sm:w-3/4 lg:w-1/3 ">
        <form onSubmit={handleSignup} className="flex flex-col gap-2">
          <h1 className={" text-3xl font-bold text-center"} style={
            {
              background: 'linear-gradient(180deg, #629994 0%, #666666 107.69%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              }
          }>Welcome to TickOff!</h1>
          <input
            type="text"
            name="name"
            className="rounded border-2 p-2"
            placeholder="Your Name"
            value={input.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="rounded border-2 p-2"
            placeholder="Your Email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="rounded border-2 p-2"
            placeholder="Set Password"
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
            SignUp
          </button>
          <p>
            Already have an account?{' '}
            <button type="button" className="text-blue-600">
              <Link to="/login">Login</Link>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
