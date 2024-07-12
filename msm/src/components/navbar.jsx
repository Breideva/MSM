import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/other-imgs/Logo.png";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="nav">
        <ul className="nav-items">
          <li>
            <Link className="list-item" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/about">
              About
            </Link>
          </li>
          <li>
            {location.pathname === "/" ? (
              <a className="list-item" href="#">
                <img src={logo} alt="logo" />
              </a>
            ) : (
              <Link className="list-item" to="/">
                <img src={logo} alt="logo" />
              </Link>
            )}
          </li>
          <li>
            <Link className="list-item" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
