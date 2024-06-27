import { Navbar } from "../components/navbar";
import "../styles/home.css";
import { Link } from "react-router-dom";
import sunset from "../assets/imgs/sunset.png";
import sunset2 from "../assets/imgs/sunset-2.png";
import sideBoat from "../assets/imgs/side-boat.png";
import boat from "../assets/imgs/back-of-boat.png";
import squaresOne from "../assets/other-imgs/Square-Img-1.png";

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
        <p>
          Embark on new water adventures with our trusted and professional
          marine services by your side{" "}
        </p>
        <img className="sunset-1" src={sunset} alt="image of sunset" />
        <img className="sunset-2" src={sunset2} alt="second image of sunset" />
      </div>
      <div className="svg layer-1"></div>
      <div className="home-second-body">
        <div>
          <img src={boat} alt="" />
          <img src={sideBoat} alt="" />
          <img src={boat} alt="" />
          <h1>Discover Our Work</h1>
          <Link>
            <button>View Projects</button>
          </Link>
        </div>
      </div>
      <div className="home-third-body">
        <div>
          <h1>Marine Services & Management</h1>
          <h2>Will get any and every job done</h2>
        </div>
      </div>
      <div className="svg layer-2"></div>
      <div className="home-fourth-body">
        <div className="text-box">
          <h1>Why choose Marine Services & Management</h1>
          <p>
            Choose us for expert boat care and exceptional service. We ensure
            your vessel performs at its best.
          </p>
          <button>Check Out Services</button>
        </div>
        <img className="normal-img" src={boat} alt="" />
        <img className="square-design" src={squaresOne} alt="" />
      </div>
      <div className="home-fifth-body">
        <h1>Reviews tell the truth</h1>
        <div className="review-box">
          <div>
            <h1></h1>
            <img src="" alt="" />
            <p></p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
