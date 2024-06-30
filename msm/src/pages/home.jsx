import { Navbar } from "../components/navbar";
import "../styles/home.css";
import { Link } from "react-router-dom";
import sunset from "../assets/imgs/sunset.png";
import sunset2 from "../assets/imgs/sunset-2.png";
import sideBoat from "../assets/imgs/side-boat.png";
import boat from "../assets/imgs/back-of-boat.png";
import squaresOne from "../assets/other-imgs/Square-Img-1.png";
import star from "../assets/other-imgs/Star.png";
import { Star } from "phosphor-react";
import squaresTwo from "../assets/other-imgs/Square-Img-2.png";


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
            <h2>Our Services</h2>
            <p>View work and services we provide </p>
          </div>
        </Link>
        <Link className="box-link">
          <div className="header-box">
            <h2>View Projects</h2>
            <p>Look at amazing work done by us</p>
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
          marine services by your side
        </p>
        <img loading="lazy" className="sunset-1" src={sunset} alt="image of sunset" />
        <img loading="lazy" className="sunset-2" src={sunset2} alt="second image of sunset" />
      </div>
      <div className="svg layer-1"></div>
      <div className="home-second-body">
        <div className="second-body-content">
          <h1>Discover Our Work</h1>
          <Link>
            <button>View Projects</button>
          </Link>
        </div>
      </div>
      <div className="home-third-body">
        <div>
          <h1>Marine Services & Management</h1>
          <h2>We get every job done right</h2>
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
        <img loading="lazy" className="normal-img" src={boat} alt="" />
        <img loading="lazy" className="square-design" src={squaresOne} alt="" />
      </div>
      <div className="home-fifth-body">
        <h1>Reviews tell the truth</h1>
        <div className="review-boxes">
          <div className="review-box">
            <h2>First Last</h2>
            <img loading="lazy" className="pfl-pic" src={sunset2} alt="" />
            <p>"The best team I've ever worked with"</p>
            <div className="star-box">
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
            </div>
          </div>
          <div className="review-box">
            <h2>First Last</h2>
            <img loading="lazy" className="pfl-pic" src={sunset2} alt="" />
            <p>"The best team I've ever worked with"</p>
            <div className="star-box">
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
            </div>
          </div>
        </div>
        <img loading="lazy" className="square-design-two" src={squaresTwo} alt="" />
      </div>
      <div className="home-sixth-body">

      </div>
    </>
  );
};
