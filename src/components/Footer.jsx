import React from 'react'

function Footer() {
  return (
    <div className='foot'>
      <div className='img'>
        <div className='image'> 
           <img src='./weblogo.png' style={{
            height:'100px',
            width:'280px',
            marginLeft:'7%',
            marginTop:'15%'
           }}></img>
           <p style={{
            marginLeft:'8%',
            marginTop:'2%'
           }}>&copy;HomeCraftsMan India Ltd.</p>
        </div>
      </div>
      <div className='company'>
        <p style={{
            marginLeft:'8%',
            marginTop:'13%',
            fontWeight:'500'
        }}>COMPANY</p>
        <p style={{
            marginLeft:'8%'
        }}>About HomeCraftsMan</p>
        <p style={{
            marginLeft:'8%'
        }}>In the News</p>
        <p style={{
            marginLeft:'8%'
        }}>Careers</p>
        <p style={{
            marginLeft:'8%'
        }}>
        Contact us</p>
        <p style={{
            marginLeft:'8%'
        }}>Terms & privacy</p>
        <p style={{
            marginLeft:'8%'
        }}>Copyright & Trademark</p>
      </div>
      <div className='explore'>
        <p style={{
           marginLeft:'8%',
           marginTop:'13%',
           fontWeight:'500'
        }}
        >FOUNDERS</p>
        <p style={{
            marginLeft:'8%'
        }}>Abhishek kumar</p>
      </div>
      <div className='connect'>
        <p style={{
            marginLeft:'8%',
            marginTop:'13%',
            fontWeight:'500'
        }}>CONNECT WITH US</p>
        <p style={{
            marginLeft:'8%'
        }}>Twitter</p>
        <p style={{
            marginLeft:'8%'
        }}> Facebook</p>
        <p style={{
            marginLeft:'8%'
        }}>Instagram</p>
      </div>
    </div>
  )
}

export default Footer;
