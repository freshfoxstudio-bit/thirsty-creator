import React, { useState, useEffect } from 'react';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const audio = new Audio('/jinglemix.mp3');
    audio.play();

    // When audio ends, redirect to sign up/sign in
    audio.addEventListener('ended', () => {
      window.location.href = '/signup'; // <-- change this if your sign in page is /signin
    });

    // Fallback in case audio doesn't play
    const timeout = setTimeout(() => {
      window.location.href = '/signup';
    }, 20000); // max 20 seconds

    return () => {
      clearTimeout(timeout);
      audio.pause();
    };
  }, []);

  if (!showSplash) return null;

  // Splash screen
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

export default App;
