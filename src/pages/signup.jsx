import React, { useState } from 'react';

function Signup({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState('signup'); // 'signup' or 'signin'

  const handleSubmit = (e) => {
    e.preventDefault();

    // Notify App of logged-in email
    if (onLogin) onLogin(email);

    // Admin check
    if (email.toLowerCase() === 'hcandlish2014@gmail.com') {
      alert('Welcome Admin!');
      return; // admin goes to Recipes page, sees admin link
    }

    // Regular user alerts
    if (tab === 'signup') {
      alert(`Signed up with:\nEmail: ${email}\nPassword: ${password}`);
    } else {
      alert(`Signed in with:\nEmail: ${email}\nPassword: ${password}`);
    }

    // Clear inputs
    setEmail('');
    setPassword('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFDEE9, #B5FFFC)',
        fontFamily: 'Comic Sans MS, sans-serif',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          color: '#FF6F61',
          textShadow: '2px 2px #FFD93D',
          marginBottom: '20px',
        }}
      >
        Thirsty Creator
      </h1>

      {/* Tabs */}
      <div style={{ marginBottom: '30px' }}>
        <button
          onClick={() => setTab('signup')}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            borderRadius: '10px',
            border: 'none',
            background: tab === 'signup' ? '#FF6F61' : '#FFD93D',
            color: tab === 'signup' ? 'white' : '#333',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => setTab('signin')}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            background: tab === 'signin' ? '#FF6F61' : '#FFD93D',
            color: tab === 'signin' ? 'white' : '#333',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Sign In
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '300px',
          background: 'white',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 0 30px #FF6F61',
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #FF6F61',
            fontSize: '1rem',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #FF6F61',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '10px',
            border: 'none',
            background: '#FF6F61',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 0 10px #FFD93D',
          }}
        >
          {tab === 'signup' ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}

export default Signup;
