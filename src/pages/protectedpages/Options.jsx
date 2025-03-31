import React from 'react'
import Navigation from '../../components/Navbar';
import Footer from '../../components/Footer';
import './protected.css'
import { Link } from 'react-router-dom';

function Options() {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
      
       <div className='option'>
        <div className='optionbox'>
            <div className='top'>
            <h1>Hello User</h1>
            <p>what's up on your mind currently</p>
            </div>
            <div className='useroptions'>
                <div className='useroption'>
                 <Link to='/Projects' style={{
                    textDecoration:'none',
                    color:'black'
                 }}><h5>browse projects</h5></Link>
                </div>
                <div className='useroption'>
                <Link to='/Ideas' style={{
                    textDecoration:'none',
                    color:'black'
                 }}><h5>browse ideas</h5></Link>
                </div>
                <div className='useroption'>
                <Link to='/Profile' style={{
                    textDecoration:'none',
                    color:'black'
                 }}><h5>upload project/ideas</h5></Link>
                </div>
            </div>
        </div>
        
       </div>
      <Footer/>
    </div>
  )
}

export default Options
