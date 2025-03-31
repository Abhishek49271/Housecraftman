import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../../components/Navbar';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal'; // Import Modal component
import ProjectUpload from './ProjectUpload';
import './protected.css'; // Your custom CSS file for styling
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to view your profile.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsername(response.data.username);
        setEmail(response.data.email);
        setProfilePicUrl(response.data.profilepic);
      } catch (err) {
        console.log('Error fetching profile data:', err);
        setError('Failed to fetch profile data.');
      }
    };

    fetchProfile();
  }, []);

  // Handle profile picture upload
  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(Array.from(files));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setError('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setError('');

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('avatar', file);
    });

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to upload files.');
        setUploading(false);
        return;
      }

      const response = await axios.post('http://localhost:8080/profilepic', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploading(false);
      setProfilePicUrl(response.data.profilePicUrl); 
      setSelectedFiles([]);
    } catch (err) {
      setUploading(false);
      setError('Upload failed: ' + err.message);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/Login');
  };

  // Show the ProjectUpload modal
  const renderProject = () => {
    setShowModal(true); // Show the modal
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  function renderIdeas(){
    navigate('/Ideas')
  }

  function showProject(){
    navigate('/Projects')
  }

  return (
    <div>
      <Navigation />
      <div className="profile">
        <div className="profilebox">
          <div className="image1">
            {profilePicUrl ? (
              <img
                src={profilePicUrl}
                alt="Profile"
                className="profile-pic"
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              />
            ) : (
              <div className="placeholder-pic">No Profile Picture</div>
            )}
          </div>
          <h2 className="profile-username" style={{ marginLeft: '20px' }}>
            {username}
          </h2>
          <div className="activity">
            <h4>Your activities here</h4>
            <div
              className="activity-buttons"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <button
                style={{
                  backgroundColor: 'rgb(0, 117, 98)',
                  color: 'white',
                  border: 'none',
                  padding: '10px',
                  fontWeight: 'bolder',
                  borderRadius: '20px',
                  marginTop: '10px',
                  marginLeft: '10px',
                }}
                onClick={handleUploadClick} // Handle Profile Picture Upload
              >
                Upload a profile pic+
              </button>
              <button
                style={{
                  backgroundColor: 'rgb(0, 117, 98)',
                  color: 'white',
                  border: 'none',
                  padding: '10px',
                  fontWeight: 'bolder',
                  borderRadius: '20px',
                  marginTop: '10px',
                  marginLeft: '10px',
                }}
                onClick={renderIdeas} // Handle Profile Picture Upload
              >
                Discover Ideas
              </button>


              <button
                style={{
                  backgroundColor: 'rgb(0, 117, 98)',
                  color: 'white',
                  border: 'none',
                  padding: '10px',
                  fontWeight: 'bolder',
                  borderRadius: '20px',
                  marginTop: '10px',
                  marginLeft: '10px',
                }}
                onClick={renderIdeas} // Handle Profile Picture Upload
              >
                Upload Idea+
              </button>
              <button
                style={{
                  backgroundColor: 'rgb(0, 117, 98)',
                  color: 'white',
                  border: 'none',
                  padding: '10px',
                  fontWeight: 'bolder',
                  borderRadius: '20px',
                  marginTop: '10px',
                  marginLeft: '10px',
                }}
                onClick={showProject} // Handle Profile Picture Upload
              >
                Discover projects
              </button>

              <button
                style={{
                  backgroundColor: 'rgb(0, 117, 98)',
                  color: 'white',
                  border: 'none',
                  padding: '10px',
                  fontWeight: 'bolder',
                  borderRadius: '20px',
                  marginTop: '10px',
                  marginLeft: '10px',
                }}
                onClick={renderProject} // Open modal for Project Upload
              >
                Upload a project+
              </button>
            </div>
            <input
              type="file"
              id="fileInput"
              name="avatar"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            {uploading && <p>Uploading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button
              onClick={handleUpload}
              style={{
                marginTop: '15px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: 'white',
                fontWeight: 'bolder',
              }}
            >
              Upload Image
            </button>
          </div>
        </div>
      </div>

      {/* Modal to upload a project */}
      <Modal show={showModal} onClose={closeModal}>
        <ProjectUpload /> {/* Render ProjectUpload inside the modal */}
      </Modal>

      <Footer />
    </div>
  );
}

export default Profile;
