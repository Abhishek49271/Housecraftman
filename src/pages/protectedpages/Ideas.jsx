import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';

function Ideas() {
  const [ideaInput, setIdeaInput] = useState('');
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    
    axios.get('http://localhost:8080/ideas', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`  
      }
    })
    .then(response => {
      setIdeas(response.data.ideas);
    })
    .catch(error => {
      console.error("Error fetching ideas:", error);
      setError('Failed to load ideas.');
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!ideaInput) {
      setError('Please enter an idea!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/ideas', { idea: ideaInput }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      });

      setIdeas([response.data.idea, ...ideas]);  
      setIdeaInput('');  
      setError('');
    } catch (error) {
      console.error("Error submitting idea:", error);
      setError('Failed to submit idea.');
    }
  };

  return (
    <div>
      <Navigation />
      <div className='ideasection' style={{ padding: '20px',marginTop:'20px' }}>
        <h1>Share Your Ideas</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={ideaInput}
            onChange={(e) => setIdeaInput(e.target.value)}
            placeholder="Write your idea here..."
            rows="5"
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <br />
          <button type="submit" style={{ padding: '10px 20px' }}>Submit Idea</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div style={{
          textAlign:'center'
        }}>
          <h1 style={{
          marginTop:'15px',
          marginBottom:'20px',
          
        }}>Submitted Ideas </h1>
        </div>
        
        {ideas.length === 0 ? (
          <p>No ideas to display.</p>
        ) : (
          <div>
            {ideas.map((idea) => (
              <div key={idea._id} style={{ border: '1px solid #ddd', marginBottom: '10px', padding: '20px',backgroundColor:'#F0F0F0',borderRadius:'10px' }}>
                <h3>{idea.idea}</h3>
                <small>Submitted by:{idea.user}</small>
                <br />
                <small>{new Date(idea.date).toLocaleString()}</small>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Ideas;
