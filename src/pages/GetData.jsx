import useFetch from './useFetch';
import Post from './Post';

function GetData() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="getdata-container">
      <Post posts={data} title="All Posts" />
    </div>
  );
}

export default GetData;