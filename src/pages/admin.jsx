import React from 'react';

function Admin() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFD93D, #FF6F61)',
        fontFamily: 'Comic Sans MS, sans-serif',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          color: '#fff',
          textShadow: '2px 2px #333',
          marginBottom: '20px',
        }}
      >
        Admin Dashboard
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#fff' }}>
        Welcome, hcandlish2014@gmail.com!
      </p>
      <p style={{ marginTop: '20px', color: '#fff' }}>
        Here you can manage the app content and users.
      </p>
    </div>
  );
}

export default Admin;
