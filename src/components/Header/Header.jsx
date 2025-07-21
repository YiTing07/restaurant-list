import bannerImg from '../../assets/images/restaurants-list-cover.jpg';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Restaurant List</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Favorite</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}></div>
    </header>

  )
}