import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Play the jingle automatically
    const audio = new Audio('/jinglemix.mp3');
    audio.play();
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        background: 'linear-gradient(135deg, #FFDEE9, #B5FFFC)', // bright gradient
        minHeight: '100vh',
        padding: '20px',
        color: '#333',
        fontFamily: 'Comic Sans MS, sans-serif', // fun font
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#FF6F61', textShadow: '2px 2px #FFD93D' }}>
        Welcome to Thirsty Creator!
      </h1>

      <img
        src="/freshfox-logo.png"
        alt="Logo"
        width="200"
        style={{ margin: '20px', borderRadius: '20px', boxShadow: '0 0 20px #FFD93D' }}
      />

      <img
        src="/drinks.png"
        alt="Drinks"
        width="300"
        style={{ marginTop: '20px', borderRadius: '20px', boxShadow: '0 0 20px #FF6F61' }}
      />
    </div>
  );
}

export default App;
