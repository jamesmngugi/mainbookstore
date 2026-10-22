import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="notfound">
      <h1 className="notfound-title">404 - Page Not Found</h1>
      <p className="notfound-message">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" >
        click to Go Back to Homepage
      </Link>
    </div>
  );
};

export default Notfound;