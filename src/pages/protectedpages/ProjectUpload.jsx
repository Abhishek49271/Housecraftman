import React, { useState } from 'react';
import axios from 'axios';
import Navigation from '../../components/Navbar';

function ProjectUpload() {
  const [images, setImages] = useState([]);
  const [captions, setCaptions] = useState([]);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    const files = e.target.files;
    setImages(Array.from(files));  // Keep the actual File objects, not object URLs
  };
  

  const handleCaptionChange = (index, value) => {
    const newCaptions = [...captions];
    newCaptions[index] = value;
    setCaptions(newCaptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    images.forEach((image, index) => {
      formData.append('images', image); // Add image to formData
      formData.append(`captions[${index}]`, captions[index] || '');  // Add the caption for each image
    });
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/projects', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error submitting project:', error);
      setMessage('Error submitting project');
    }
  };


  return (
    <div>
      
      <h1 style={{textAlign:'center'}}>Upload Your Project</h1>
      <form onSubmit={handleSubmit}>
      <input type="file" name="images" multiple accept="image/*" onChange={handleImageChange}  />
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`preview-${index}`} width="100" />
            <input
              type="text"
              placeholder="Caption"
              value={captions[index] || ''}
              onChange={(e) => handleCaptionChange(index, e.target.value)}
            />
          </div>
        ))}
        
        <button type="submit">Submit Project</button>
      </form>
      
      {message && <p>{message}</p>}
      </div>
     
      
  );
}

export default ProjectUpload;
