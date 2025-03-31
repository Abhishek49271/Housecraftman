import React from 'react'
import '../style.css';
import { Link } from 'react-router-dom';

function Roomcards(props) {
  
  return (
    <div className='card' style={{
    }}>
       <img src={props.imageurl} style={{
        height:'300px',
        width:'194px',
        backgroundPosition:'top',
        backgroundSize:'cover'
      }}></img>
  
      <div className='small' style={{
        height:'30px',
        width:'100%',
        backgroundColor:'white',
        marginTop:'8.5%',
        borderBottomLeftRadius:'5px',
        borderBottomRightRadius:'5px',
        textAlign:'center'
      }}><Link to={`/${props.route}`} style={{
        textDecoration:'none',
        color:'black',
       
      }}><h5>{props.name}</h5></Link></div>
    </div>
  )
}

export default Roomcards;
