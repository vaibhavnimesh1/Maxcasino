import { Link } from "react-router-dom";
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-5 px-lg-5 ">
              <li className="nav-item px-sm-4  ">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa-brands fa-codepen"></i>Sport
                </a>
              </li>
              <li className="nav-item px-sm-4 ">
                <a className="nav-link" href="#">
                  <i className="fa-brands fa-codepen"></i>Live
                </a>
              </li>
              <li className="nav-item px-sm-4 ">
                <a className="nav-link" href="#">
                  <i className="fa-brands fa-codepen"></i>Casino
                </a>
              </li>

              <li className="nav-item px-sm-4 ">
                <a className="nav-link" href="#">
                  <i className="fa-brands fa-codepen"></i>Live Casino
                </a>
              </li>
              <li className="nav-item px-sm-4  ">
                <a className="nav-link" href="#">
                  <i className="fa-brands fa-codepen"></i>Virtual Games
                </a>
              </li>
            </ul>
            <div className="d-flex px-sm-4 " role="search">
              <div className="dropdown dropdown-box  drop">
                <button
                  className="btn  dropdown-toggle  text-light "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </button>
                <ul className="dropdown-menu text-light  ">
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

              <button className="button login mx-4" type="submit">
             <Link to="/signIn">   Login</Link>
              </button>
              <button className="button signUp" type="submit">
               
             <Link to="/signUp">    Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
