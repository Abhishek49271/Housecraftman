import React from 'react'
import Infoitem from './Infoitem';
import Roomcards from './Roomcards';
import Aim from './Aim';
function Info() {
  return (
    <div>
       <h1 style={{
        marginTop:'37%',
        marginLeft:'22%',
        fontWeight:'600'
       }}>Here's what you can do on HomeCraftsMan</h1>
       <div className='flexclass'>
       <Infoitem task='Home improvement tips' />
       <Infoitem task='D.I.Y'/>
       <Infoitem task='Find your probelm'/>
       </div>
       
       
       <div className='browse'>
        <h3 style={{
        marginTop:'8%',
        marginLeft:'5%',
        fontWeight:'600'
       }}>Browse Ideas by Room</h3>

       {/* <div className='container' style={{
        width:'100%',
        display:'flex',
        flexDirection:'row'
       }}> */}
        <div className='container' style={{
        width:'100%',
        display:'flex',
        marginTop:'40px'
       }}>
          <Roomcards route='kitchenimprovement' name='kitchen' imageurl='https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?cs=srgb&dl=pexels-houzlook-3926542.jpg&fm=jpg'/>
          <Roomcards route='drawingimprovement' name='drawingroom' imageurl='https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=qw37MGIiTL_jML3_Tbm4bM-jNLCrocSWj7DanhBr_bY='/>
          <Roomcards route='bedroomimprovement'  name='bedroom' imageurl='https://c4.wallpaperflare.com/wallpaper/837/534/538/bedroom-bed-architecture-interior-design-high-resolution-images-wallpaper-preview.jpg'/>
          <Roomcards route='bathroomimprovement' name='bathroom' imageurl='https://img.freepik.com/premium-photo/modern-bathroom-hd-8k-wallpaper-stock-photographic-image_890746-21296.jpg'/>
          <Roomcards route='diningimprovement' name='diningroom'  imageurl='https://images.pexels.com/photos/269262/pexels-photo-269262.jpeg?cs=srgb&dl=pexels-pixabay-269262.jpg&fm=jpg'/>
          <Roomcards route='gardenimprovement' name='garden'  imageurl='https://plus.unsplash.com/premium_photo-1673141390230-8b4a3c3152b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVufGVufDB8fDB8fHww'/>

        </div>
        <Aim/>
       </div>

       </div>

  )
}

export default Info;
