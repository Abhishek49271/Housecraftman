import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/login';
import SignUp from './pages/authentication/SignUp';
import Options from './pages/protectedpages/Options';
import Profile from './pages/protectedpages/Profile';
import Ideas from './pages/protectedpages/Ideas';
import ProjectUpload from './pages/protectedpages/ProjectUpload';
import Projects from './pages/protectedpages/Projects';


import drawingtips from './improvementdata/drawingtips';
import bedroomtips from './improvementdata/bedroomtips';
import kitchentips from './improvementdata/kitchentips';
import gardentips from './improvementdata/gardentips';
import bathroomtips from './improvementdata/bathroomtips';
import diningtips from './improvementdata/diningtips';



import Kitchen_improvement from './pages/improvement/Kitchen_improvement';
import Drawing_improvement from './pages/improvement/Drawing_improvement';
import Bedroom_improvement from './pages/improvement/Bedroom_improvement';
import Garden_improvement from './pages/improvement/Garden_improvement';
import Dining_improvement from './pages/improvement/Dining_improvement';
import Bathroom_improvement from './pages/improvement/Bathroom_improvement';



import Kitchen_diy from './pages/diy/Kitchen_diy';
import Bedroom_diy from './pages/diy/Bedroom_diy';
import Bathroom_diy from './pages/diy/Bathroom_diy';
import Dining_diy from './pages/diy/Dining_diy';
import Garden_diy from './pages/diy/Garden_diy';

import gardendiy from './diydata/gardendiy';
import bathroomdiy from './diydata/bathroomdiy';
import bedroomdiy from './diydata/bedroomdiy';
import diningdiy from './diydata/diningdiy';
import Drawing_diy from './pages/diy/Drawing_diy';

import drawingdiy from './diydata/drawingdiy';
import kitchendiy from './diydata/kitchendiy';


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navigation />
          <Hero />
          <Info />
          {/* <Aim/> */}
          <Footer />
        </>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* improvement section routes */}

      <Route path='/kitchenimprovement' element={<Kitchen_improvement kitchentips={kitchentips}/>}/>
      <Route path='/drawingimprovement' element={<Drawing_improvement drawingtips={drawingtips}/>}/>
      <Route path='/bedroomimprovement' element={<Bedroom_improvement bedroomtips={bedroomtips}/>}/>
      <Route path='/diningimprovement' element={<Dining_improvement diningtips={diningtips}/>}/>
      <Route path='/bathroomimprovement' element={<Bathroom_improvement bathroomtips={bathroomtips}/>}/>
      <Route path='/gardenimprovement' element={<Garden_improvement gardentips={gardentips}/>}/>


      {/* D.I.Y section routes */}

      <Route path='/diygarden' element={<Garden_diy gardendiy={gardendiy}/>}/>
      <Route path='/diybathroom' element={<Bathroom_diy bathroomdiy={bathroomdiy}/>}/>
      <Route path='/diybedroom' element={<Bedroom_diy bedroomdiy={bedroomdiy}/>}/>
      <Route path='/diydining' element={<Dining_diy  diningdiy={diningdiy}/> }/>
      <Route path='/diydrawing' element={<Drawing_diy drawingdiy={drawingdiy}/>}/>
      <Route path='/diykitchen' element={<Kitchen_diy kitchendiy={kitchendiy}/>}/>
      
      {/* Protected Routes */}
      <Route path='/options' element={<Options/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/ideas' element={<Ideas/>}/>
      <Route path='/projectupload' element={<ProjectUpload/>}/>
      <Route path='/projects' element={<Projects/>}/>


    </Routes>
  );
}

export default App;
