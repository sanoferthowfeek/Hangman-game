// src/components/SignOut.js
import React from 'react';
import './Signout.css';

const SignOut = ({ setToken }) => {
  const handleSignOut = () => {
    setToken(null);
  };

  return (
    <button className='game1' onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOut;
