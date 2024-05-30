// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './Sign.css'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, password });
      alert('User registered');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <div className='input1'>
      <h2>Register</h2>
      <input   type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button className='game1' type="submit">Register</button>
      </div>
    </form>
  );
};

export default Register;
