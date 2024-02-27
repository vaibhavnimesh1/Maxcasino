import "../App.css";

const Header = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bar ">
        <div className="container-fluid">
          <a className="navbar-brand logo text-light " href="#">
            <span>MAXX</span>Bet360
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                
                <a className="nav-link active" aria-current="page" href="#">
                  Sport
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Live
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Casino
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Live Casino
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Virtual Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Promotion
                </a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <div className="dropdown dropdown-box ">
                <button
                  className="btn  dropdown-toggle  text-light "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </button>
                <ul className="dropdown-menu text-light ">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <button className="button login" type="submit">
                Login
              </button>
              <button className="button signup" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
