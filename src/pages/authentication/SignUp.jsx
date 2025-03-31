import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/', {
        username,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);

      // Reset form fields
      setUsername('');
      setEmail('');
      setPassword('');

      // Navigate to another page
      navigate('/options');
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <div className='login'>
        <div className='box' style={{ height: '370px' }}>
          <h2 style={{ marginLeft: '36%', marginTop: '2%', fontWeight: '600', marginBottom: '2%' }}>Sign Up</h2>

          <form onSubmit={submitHandler}>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <input
              required
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter your username'
              name='username'
              style={{
                height: '50px', width: '80%', marginLeft: '9%', marginTop: '2%',
                padding: '2%', borderRadius: '7px', border: '0.5px solid grey',
              }}
            />

            <input
              required
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              name='email'
              style={{
                height: '50px', width: '80%', marginLeft: '9%', marginTop: '2%',
                padding: '2%', borderRadius: '7px', border: '0.5px solid grey',
              }}
            />
            <br />

            <input
              required
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              name='password'
              style={{
                height: '50px', width: '80%', marginLeft: '9%', marginTop: '3%',
                padding: '2%', borderRadius: '7px', border: '0.5px solid grey',
              }}
            />
            <br />

            <button style={{
              height: '50px', width: '80%', marginLeft: '9%', marginTop: '3%',
              padding: '2%', borderRadius: '7px', border: '0.5px solid grey',
              backgroundColor: 'rgb(0, 117, 98)', color: 'white', fontWeight: 'bolder',
            }}>
              Sign Up
            </button>
          </form>

          <Link to='/login'>
            <p style={{ marginLeft: '32%', marginTop: '2%', listStyleType: 'none' }}>Already a user? Log In</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
