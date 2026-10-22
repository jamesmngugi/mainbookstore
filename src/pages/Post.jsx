import { Link } from "react-router-dom";

function Post({ posts = [], title = 'Posts' }) {
  return (
    <section>
      <h1 className="posts-title">{title}</h1>

      {posts.length === 0 ? (
        <p className="empty-message">No posts available.</p>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <Link to={`/post/${post.id}`} className="post-card-link">
                <h2 className="post-card-title">{post.title}</h2>
              </Link>
              <p className="post-card-body">{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Post;