import { Navbar } from "../components/navbar";
import "../styles/home.css";
import { Link } from "react-router-dom";
import sunset from "../assets/imgs/sunset.png"
import sunset2 from "../assets/imgs/sunset-2.png"

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-header">
        <h1>Unleash your boat's potential</h1>
        <h3>Explore our reliable services</h3>
      </div>
      <div className="header-boxes">
        <Link className="box-link">
          <div className="header-box">
            <h2>Explore Our Services</h2>
            <p>View work and services we provide </p>
          </div>
        </Link>
        <Link className="box-link">
          <div className="header-box">
            <h2>View Projects</h2>
            <p>Look at amazing work previously done by us</p>
          </div>
        </Link>
        <Link className="box-link">
          <div className="header-box">
            <h2>Learn about us</h2>
            <p>Get to know the ones who help you</p>
          </div>
        </Link>
      </div>
      <div className="home-first-body">
        <h1>Expierence the difference on water</h1>
        <p>Embark on new adventures water with our trusted and professional marine services at your side. </p>
        <img className="sunset-1" src={sunset} alt="image of sunset" />
        <img className="sunset-2" src={sunset2} alt="second image of sunset" />
      </div>
      <div>
        <div className="svg layer-1"></div>
      </div>
    </>
  );
};
