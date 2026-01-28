import React, { useState, useEffect } from 'react';
import Signup from './pages/signup';
import Recipes from './pages/recipes';
import Admin from './pages/admin';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [loggedInEmail, setLoggedInEmail] = useState(null);

  useEffect(() => {
    const audio = new Audio('/jinglemix.mp3');
    audio.play();

    // After jingle ends, show login/signup
    audio.addEventListener('ended', () => {
      setShowSplash(false);
    });

    const timeout = setTimeout(() => setShowSplash(false), 20000); // max 20s fallback

    return () => {
      clearTimeout(timeout);
      audio.pause();
    };
  }, []);

  if (showSplash) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #FFDEE9, #B5FFFC)',
          flexDirection: 'column',
          fontFamily: 'Comic Sans MS, sans-serif',
          textAlign: 'center',
        }}
      >
        <img
          src="/freshfox-logo.png"
          alt="Logo"
          width="200"
          style={{ marginBottom: '20px', borderRadius: '20px', boxShadow: '0 0 20px #FFD93D' }}
        />
        <h1 style={{ fontSize: '2.5rem', color: '#FF6F61', textShadow: '2px 2px #FFD93D' }}>
          Welcome to Thirsty Creator!
        </h1>
      </div>
    );
  }

  if (!loggedInEmail) {
    // Show signup/login page
    return <Signup onLogin={(email) => setLoggedInEmail(email)} />;
  }

  // Admin check
  if (loggedInEmail.toLowerCase() === 'hcandlish2014@gmail.com') {
    return <Recipes userEmail={loggedInEmail} />;
  }

  // Normal user
  return <Recipes userEmail={loggedInEmail} />;
}

export default App;
