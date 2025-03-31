// Projects.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../../components/Navbar';
import Footer from '../../components/Footer';

// Add some basic inline styles for an Instagram-like feed
const containerStyle = {
  maxWidth: '600px', // Limiting the width similar to Instagram feed
  margin: '0 auto',
  padding: '20px',
};

const postStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  overflow: 'hidden',
  border: '1px solid #e0e0e0',
};

const postHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '15px',
  borderBottom: '1px solid #e0e0e0',
};

const userAvatarStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '10px',
  objectFit: 'cover',
};

const usernameStyle = {
  fontWeight: 'bold',
  fontSize: '16px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
};

const captionStyle = {
  padding: '10px 15px',
  color: '#555',
  fontSize: '14px',
  lineHeight: '1.4',
};

const loaderStyle = {
  textAlign: 'center',
  marginTop: '50px',
  fontSize: '18px',
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8080/projects');
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Navigation />
      <div style={containerStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Projects</h1>

        {loading ? (
          <div style={loaderStyle}>
            <p>Loading projects...</p>
          </div>
        ) : (
          <div>
            {projects.length > 0 ? (
              projects.map((project) => (
                <div key={project._id} style={postStyle}>
                  {/* Post Header with User Info */}
                  <div style={postHeaderStyle}>
                    <img
                      src={project.userAvatar || 'https://via.placeholder.com/40'}
                      alt={`avatar-${project.user}`}
                      style={userAvatarStyle}
                    />
                    <span style={usernameStyle}>{project.user}</span>
                  </div>

                  {/* Post Images */}
                  {project.images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image.url}
                        alt={`project-image-${index}`}
                        style={imageStyle}
                      />
                    </div>
                  ))}

                  {/* Post Caption */}
                  <div style={captionStyle}>
                    {project.images.map((image, index) => (
                      <p key={index}>{image.caption}</p>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center' }}>No projects yet!</p>
            )}
          </div>
        )}
      </div>
      <Footer /> 
    </div>
  );
}

export default Projects;
