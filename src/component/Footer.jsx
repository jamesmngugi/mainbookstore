function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div>
                        <h3>
                            <i className="fa-solid fa-book-open"></i>
                            BookStore.
                        </h3>
                        <p>
                            Simple and efficient book management system.
                        </p>
                    </div>

                    <div></div>
                        <h4>Quick Links</h4>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/contacts">Contacts</a></li>
                        </ol>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
                </div>
           
        </footer>
    );
}

export default Footer;