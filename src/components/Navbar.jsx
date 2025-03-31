import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      // Optionally fetch the user profile picture if needed
      const fetchProfilePic = async () => {
        try {
          const response = await axios.get('http://localhost:8080/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setProfilePicUrl(response.data.profilepic);
        } catch (err) {
          console.error('Failed to fetch profile picture:', err);
        }
      };
      fetchProfilePic();
    }
  }, []);

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to the profile page
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to login page
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary"
        style={{
          height: '80px',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          boxShadow: '2px 2px rgb(220, 220, 220)',
          zIndex: 1000,
        }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src='./weblogo.png' alt='logo' style={{ height: '70px', width: '150px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <NavDropdown title="Home Improvement Tips" id="navbarScrollingDropdown" style={{ fontWeight: 'bolder' }}>
                <NavDropdown.Item href="/kitchenimprovement">Kitchen</NavDropdown.Item>
                <NavDropdown.Item href="/drawingimprovement">Drawing</NavDropdown.Item>
                <NavDropdown.Item href="/bedroomimprovement">Bedroom</NavDropdown.Item>
                <NavDropdown.Item href="/diningimprovement">Dining</NavDropdown.Item>
                <NavDropdown.Item href="/bathroomimprovement">Bathroom</NavDropdown.Item>
                <NavDropdown.Item href="/gardenimprovement">Garden</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="D.I.Y" id="navbarScrollingDropdown2" style={{ fontWeight: 'bolder' }}>
                <NavDropdown.Item href="/diykitchen">Kitchen</NavDropdown.Item>
                <NavDropdown.Item href="/diydrawing">Drawing</NavDropdown.Item>
                <NavDropdown.Item href="/diybedroom">Bedroom</NavDropdown.Item>
                <NavDropdown.Item href="/diydining">Dining</NavDropdown.Item>
                <NavDropdown.Item href="/diybathroom">Bathroom</NavDropdown.Item>
                <NavDropdown.Item href="/diygarden">Garden</NavDropdown.Item>
              </NavDropdown>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search HomeCraftsman"
                  className="me-2"
                  aria-label="Search"
                  style={{
                    width: '350px',
                    marginLeft: '10px',
                    borderRadius: '20px',
                    backgroundColor: 'rgb(251, 251, 249)',
                  }}
                />
              </Form>
            </Nav>

            {/* Conditionally render profile icon or login buttons */}
            {isLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Display profile icon if logged in */}
                <img
                  src={profilePicUrl || 'https://via.placeholder.com/40'}
                  alt="Profile"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
                  onClick={handleProfileClick}
                />
                <Button
                  variant="outline-dark"
                  style={{
                    marginLeft: '15px',
                    fontWeight: 'bolder',
                    border: '2px solid black',
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outline-dark"
                    style={{
                      marginRight: '25px',
                      fontWeight: 'bolder',
                      border: '2px solid black',
                    }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outline-dark"
                    style={{
                      marginRight: '25px',
                      fontWeight: 'bolder',
                      border: '2px solid black',
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
