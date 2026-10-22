function Home() {
  return (
    <section className="home">
      <div className="home-content">
       <h1 className="home-title">
          Welcome To<br/> <span>Bookstore Management System</span>
        </h1>

        <p className="home-description">
          Discover my work, explore my projects, and learn more
          about what I do. I'm glad you're here!
        </p>

        <div className="home-buttons">
          <a href="/projects" className="home-btn primary-btn">
            Explore Projects
          </a>

          <a href="/about" className="home-btn secondary-btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

