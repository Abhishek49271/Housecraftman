import React, { useState } from 'react';
import './Authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const loginResponse = await axios.post('http://localhost:8080/login', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(loginResponse.data); // Inspect the response

           
            localStorage.setItem('token', loginResponse.data.token);

            alert(loginResponse.data.message);
            setEmail('');
            setPassword('');

            
            navigate('/options'); 

        } catch (error) {
            console.error("Error during login:", error);
            setError(error.response ? error.response.data.message : "Login failed. Please try again.");
        }
    }

    return (
        <div className='login'>
            <div className='box'>
                <h2 style={{
                    marginLeft: '38%',
                    marginTop: '2%',
                    fontWeight: '600',
                    marginBottom: '2%'
                }}> Login</h2>

                <form onSubmit={submitHandler}>
                    <input
                        type='email'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Enter your email'
                        style={{
                            height: '50px',
                            width: '80%',
                            marginLeft: '9%',
                            marginTop: '2%',
                            padding: '2%',
                            borderRadius: '7px',
                            border: '0.5px solid grey'
                        }}
                    />
                    <br />
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your password'
                        style={{
                            height: '50px',
                            width: '80%',
                            marginLeft: '9%',
                            marginTop: '3%',
                            padding: '2%',
                            borderRadius: '7px',
                            border: '0.5px solid grey'
                        }}
                    />
                    <br />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button
                        style={{
                            height: '50px',
                            width: '80%',
                            marginLeft: '9%',
                            marginTop: '3%',
                            padding: '2%',
                            borderRadius: '7px',
                            border: '0.5px solid grey',
                            backgroundColor: 'rgb(0, 117, 98)',
                            color: 'white',
                            fontWeight: 'bolder'
                        }}
                    >
                        Log In
                    </button>
                </form>

                <Link>
                    <p style={{
                        marginLeft: '36%',
                        marginTop: '2%',
                        listStyleType: 'none'
                    }}>Forgot password?</p>
                </Link>
                <Link to='/signup'>
                    <p style={{
                        marginLeft: '30%',
                        listStyleType: 'none'
                    }}>Sign Up for HomeCraftsMan </p>
                </Link>

            </div>
        </div>
    );
}

export default Login;
