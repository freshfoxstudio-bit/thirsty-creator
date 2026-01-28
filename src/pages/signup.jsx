import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up with:\nEmail: ${email}\nPassword: ${password}`);
    // Here you can add real authentication later
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
      <h1 style={{ fontSize: '3rem', color: '#FF6F61', textShadow: '2px 2px #FFD93D', marginBottom: '40px' }}>
        Join Thirsty Creator!
      </h1>

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
          Sign Up / Sign In
        </button>
      </form>
    </div>
  );
}

export default Signup;
