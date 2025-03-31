import React, { useEffect, useState } from 'react';
import '../style.css';

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "Make your home a better place to live in";

  useEffect(() => {
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      setIndex((prevIndex) => {
        if (prevIndex + 1 === fullText.length) {
          return -1; // Reset index to start over
        }
        return prevIndex + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className='container' style={{ display: 'flex' }}> 
      <div className='left' style={{
        height: '800px',
        width: '60%',        
      }}></div>
      <div className='right' style={{
        height: '800px',
        width: '40%',
        marginTop: '8%'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginLeft: '60px',
          marginRight: '40px',
          marginTop: '100px',
          fontWeight: 'bolder'
        }}>{text}</h1>

        <input 
          type='text' 
          placeholder='Enter email'  
          style={{
            marginLeft: '20%',
            height: '50px',
            width: '60%',
            marginTop: '10%',
            paddingLeft: '5px'
          }}
        />

        <button 
          style={{
            height: '50px',
            width: '60%',
            marginTop: '2%',
            paddingLeft: '5px',
            marginLeft: '20%',
            border: 'none',
            backgroundColor: 'rgb(0, 117, 98)',
            color: 'white',
            fontWeight: '600'
          }}
        >Sign Up with Email</button>

        <p style={{
          height: '50px',
          width: '60%',
          marginTop: '2%',
          paddingLeft: '5px',
          marginLeft: '20%',
          fontSize: '12px'
        }}>
          By signing up, signing in or continuing, I agree to the Houzz Terms of Use and acknowledge the Houzz Privacy Policy. 
          I agree that Houzz may use my email address for marketing purposes. I can opt out at any time through my settings.
        </p>
      </div>
    </div>
  );
}

export default Hero;