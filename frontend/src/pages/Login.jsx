import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/profile.png'; 

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'zxcvbnm') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/roles');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.loginFace}>
        <div style={styles.loginBox}>
          <div style={{ ...styles.imgBox, backgroundImage: `url(${profileImage})` }}></div>
          <div style={styles.loginMsg}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            {error && <div style={styles.error}>{error}</div>}
            <button onClick={handleLogin} style={styles.button}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0
  },
  loginFace: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover'
  },
  loginBox: {
    width: '550px',
    height: '450px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.65)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
  },
  imgBox: {
    width: '130px',
    height: '130px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%',
    border: 'white solid 6px',
    marginTop: '-95px'
  },
  loginMsg: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    width: '400px',
    height: '300px',
    marginTop: '35px'
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '25px',
    fontSize: '16px',
    background: 'rgba(255, 255, 255, 0.65)',
    outline: 'none'
  },
  button: {
    width: '220px',
    padding: '12px',
    backgroundColor: '#ba0a26',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '40px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    marginTop: '20px'
  },
  error: {
    color: 'red',
    fontSize: '14px'
  }
};

export default Login;
// 