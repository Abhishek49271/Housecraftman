import React from 'react';
import drawingtips from '../../improvementdata/drawingtips';

import Navigation from '../../components/Navbar';
import Footer from '../../components/Footer';

function Drawing_improvement() {
  console.log(drawingtips); // Check if the data is being imported

  return (
    <div >
    <Navigation style={{
   marginTop:'0%'
 }}/>
   
    <h1 style={{
     marginLeft: '13%',
     fontSize: '50px',
     fontWeight: 'bolder'
   }}>{drawingtips.title}</h1>

   <h2 style={{
     marginLeft: '13%',
     marginRight:'13%',
     marginTop: '2%',
     marginBottom:'2%',
     fontWeight: '700',
     fontSize:'45px'
   }}>Introduction</h2>

   <i>
     <h2 style={{
       fontSize: '20px',
       marginLeft: '13%',
       marginRight:'13%',
       marginBottom:'3%'
     }}>{drawingtips.introduction}</h2>
   </i> 
   <div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
   marginBottom:'1%'
 }}>
   {drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{ 
       marginLeft:'5%',
       marginRight:'13%', marginTop: '20px'}}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title1}</h3>
       <h5>{tip.content1}</h5>
     </div>
   ))}
   </div>


<div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
    marginBottom:'1%'
 }}>
{drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{ marginLeft:'5%',
       marginRight:'13%', marginTop: '20px'  }}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title2}</h3>
       <h5>{tip.content2}</h5>
     </div>
   ))}

</div>


<div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
    marginBottom:'1%'
 }}>

{drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{ marginLeft:'5%',
       marginRight:'13%', marginTop: '20px'  }}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title3}</h3>
       <h5>{tip.content3}</h5>
     </div>
   ))}
   </div>

   <div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
    marginBottom:'1%'
 }} >

{drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{ marginLeft:'5%',
       marginRight:'13%', marginTop: '20px'  }}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title4}</h3>
       <h5>{tip.content4}</h5>
     </div>
   ))}

</div>


<div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
    marginBottom:'1%'
 }}>
{drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{marginLeft:'5%',
       marginRight:'13%', marginTop: '20px'  }}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title5}</h3>
       <h5>{tip.content5}</h5>
     </div>
   ))}

</div>


<div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
    marginBottom:'1%'
 }}  >
{drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{ marginLeft:'5%',
       marginRight:'13%', marginTop: '20px' }}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title6}</h3>
       <h5>{tip.content6}</h5>
     </div>
   ))}
</div>    


<div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
    marginBottom:'1%'
 }}>
{drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{ marginLeft:'5%',
       marginRight:'13%', marginTop: '20px' }}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title7}</h3>
       <h5>{tip.content7}</h5>
     </div>
   ))}
</div>

<div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
    marginBottom:'1%'
 }}>
{drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{ marginLeft:'5%',
       marginRight:'13%', marginTop: '20px' }}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title8}</h3>
       <h5>{tip.content8}</h5>
     </div>
   ))}
</div>

<div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
    marginBottom:'1%'
 }}>
{drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{ marginLeft:'5%',
       marginRight:'13%', marginTop: '20px' }}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title9}</h3>
       <h5>{tip.content9}</h5>
     </div>
   ))}
</div>

<div style={{
   height:'200px',
   width:'70%',
   backgroundColor:'rgb(240, 240, 240)',
   marginLeft:'13%',
   paddingTop:'1.5%',
    marginBottom:'1%'
 }}>
{drawingtips.tips.map((tip, idx) => (
     <div key={idx} style={{ marginLeft:'5%',
       marginRight:'13%', marginTop: '20px' }}>
       <h3 style={{
         fontWeight:'bolder'
       }}>{tip.title10}</h3>
       <h5>{tip.content10}</h5>
     </div>
   ))}
</div>
<h2 style={{
     marginLeft: '13%',
     marginRight:'13%',
     marginTop: '2%',
     marginBottom:'2%',
     fontWeight: '700',
     fontSize:'45px'
   }}>Conclusion</h2>

    <h2 style={{ marginLeft: '13%',
       marginRight:'15%', marginTop: '2%', fontSize:'20px',marginBottom:'2%'}}>{drawingtips.conclusion}</h2>


 <Footer/>
 </div>
  );
}

export default Drawing_improvement;
