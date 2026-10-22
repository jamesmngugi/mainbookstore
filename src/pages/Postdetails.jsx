import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  
  // Replaced useHistory with useNavigate (React Router v6)
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not delete the post');
        }
        console.log(`Post with id ${id} deleted`);
        
        // Replaced history.push() with navigate()
        navigate('/post');
      })
      .catch((err) => {
        console.error('Error deleting the post:', err.message);
      });
  };

  if (loading) return <p className="status-message">Loading...</p>;
  if (error) return <p className="status-message error-message">Error: {error}</p>;
  if (!post) return null;

  return (
    <article className="post-details">
      <h1 className="post-details-title">{post.title}</h1>
      <p className="post-details-body">{post.body}</p>
      <button type="button" onClick={handleClick} className="home-btn primary-btn">
        delete
      </button>
    </article>
  );
};

export default PostDetails;