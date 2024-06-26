// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignIn from './components/SignIn.jsx';
import SignOut from './components/SignOut.jsx';
import Register from './components/Register.jsx';
import './App.css';
import Game from './components/Game.jsx';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          const res = await axios.get('https://hangman-game-9xxf.onrender.com/api/game/status', {
            headers: { Authorization: token },
          });
          if (res.status !== 200) {
            setToken(null);
          }
        } catch {
          setToken(null);
        }
      }
    };
    checkAuth();
  }, [token]);

  return (
    <div className="app1">
      
      <main>
        {token ? <Game /> : <Register />}
        {token ? <SignOut setToken={setToken} /> : <SignIn setToken={setToken} />}

      </main>
     

    </div>
  );
};

export default App;
