import React, { useState, useEffect } from 'react';
import Signup from './pages/signup'; // lowercase import

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const audio = new Audio('/jinglemix.mp3');
    audio.play();

    // When audio ends, show signup page
    audio.addEventListener('ended', () => {
      setShowSplash(false);
      setShowSignup(true);
    });

    // Fallback in case audio doesn't play
    const timeout = setTimeout(() => {
      setShowSplash(false);
      setShowSignup(true);
    }, 20000); // max 20 seconds

    return () => {
      clearTimeout(timeout);
      audio.pause();
    };
  }, []);

  if (showSplash) {
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
