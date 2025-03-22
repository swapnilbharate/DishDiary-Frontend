import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    }}>
      <div style={{
        padding: '25px',
        maxWidth: '350px',
        width: '90%',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
      }}>
        <h2 style={{
          marginBottom: '20px',
          color: '#333',
          fontSize: '24px',
          fontWeight: 'bold',
        }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '16px',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '16px',
          }}
        />
        <button style={{
          width: '100%',
          padding: '12px',
          background: 'linear-gradient(135deg, #ff758c, #ff7eb3)',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '18px',
          cursor: 'pointer',
          transition: '0.3s',
        }}>Login</button>
        <p style={{ marginTop: '15px', fontSize: '16px' }}>
          New user? <Link to="/register" style={{ color: '#ff758c', textDecoration: 'underline' }}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;