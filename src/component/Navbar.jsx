import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/post', label: 'Posts' },
  { to: '/create', label: 'Create' },
  { to: '/contacts', label: 'Contacts' },
];

function Navbar() {
  return (
    <header className="header-container">
      <Link to="/" className="header-title">
       Bookstore.
      </Link>

      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;