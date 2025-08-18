import { Link, useLocation } from 'react-router-dom';
import bannerImg from '../../assets/images/restaurants-list-cover.jpg';
import './Header.css';

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Restaurant List</Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/favorite' ? 'active' : ''}`}
                  to="/favorite"
                >
                  Favorite
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}></div>
    </header>
  )
}