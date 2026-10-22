import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, content };
    
    setIsLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create the post. Please try again.');
        }
        return response.json();
      })
      .then(() => {
        console.log('Post created successfully');
        setIsLoading(false);
        navigate('/post');
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
        console.error('Error creating post:', err);
      });
  };

  return (
    <div className="create-post">
      <h1 className="create-post-title">Create New Post</h1>
      
      {error && <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            name="title"
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter post title" 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea 
            id="content" 
            name="content" 
            rows="6" 
            required 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
          />
        </div>
        
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? 'Creating Post...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;