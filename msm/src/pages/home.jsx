// Router Links
import { Link } from "react-router-dom";

// Layout
import { Layout } from "../components/layout";

// Styles
import "../styles/home.css";

// Images
import sunset from "../assets/imgs/sunset.png";
import sunset2 from "../assets/imgs/sunset-2.png";
import star from "../assets/other-imgs/Star.png";
import boatFront from "../assets/imgs/boat-front.png";
import boatBack from "../assets/imgs/back-of-boat.png";
import midas from "../assets/imgs/Midas-prfl.png";
import james from "../assets/imgs/James-prfl.png";

// Gsap
import { homeAnimation } from "../animation/homeAnimation";
import { useEffect } from "react";


export const Home = () => {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <>
      <Layout >
      {/* Header */}
      <div className="home-header">
        <h1 className="header-h1">Unleash Your Boat's Potential</h1>
        <h3 className="header-h3">Explore our reliable services</h3>
      </div>
      <div className="header-boxes">
        <Link to="/services" className="box-link">
          <div className="header-box">
            <h2>Our Services</h2>
            <p>View work and services we provide </p>
          </div>
        </Link>
        <Link to="/projects" className="box-link">
          <div className="header-box">
            <h2>View Projects</h2>
            <p>Look at amazing work done by us</p>
          </div>
        </Link>
        <Link to="/about" className="box-link">
          <div className="header-box">
            <h2>Learn about us</h2>
            <p>Get to know the ones who help you</p>
          </div>
        </Link>
      </div>
      {/* First Body */}
      <div className="home-first-body">
        <div className="first-content">
        <h1>Expierence the Difference on Water</h1>
        <p>
          Embark on new water adventures with our trusted and professional
          marine services by your side.
        </p>
        </div>
        <img
          loading="lazy"
          className="sunset-1 sunset"
          src={sunset}
          alt="image of sunset"
        />
        <img
          loading="lazy"
          className="sunset-2 sunset"
          src={sunset2}
          alt="second image of sunset"
        />
      </div>
      {/* Wave Layer */}
      <div className="svg layer-1"></div>
      {/* Second Body */}
      <div className="home-second-body">
        <div className="second-body-content">
          <h1>Discover Our Work</h1>
          <Link>
            <button>View Projects</button>
          </Link>
        </div>
      </div>
      {/* Third Body */}
      <div className="home-third-body">
        <div className="text-box">
          <h1>Why choose Marine Services & Management</h1>
          <p>
            Choose us for expert boat care and exceptional service. We ensure
            your vessel performs at its best.
          </p>
          <button>Check Out Services</button>
        </div>
        <img loading="lazy" className="normal-img" src={boatFront} alt="" />
      </div>
      {/* Second Wave Layer */}
      <div className="svg layer-2"></div>
      {/* Fourth Body */}
      <div className="home-fourth-body">
        <div className="fourth-header">
          <h1>Get To Know Us</h1>
          <h2>
            Marine Services and Management has been committed to delivering
            top-tier marine services. Our highly skilled team excels in
            comprehensive boat maintenance and repair, specializing in outboard
            engines and electrical systems to keep your vessel running smoothly
            and reliably.
          </h2>
        </div>
        <div className="body-main">
          <img src={boatBack} alt="" />
          <div className="body-text">
            <p>
              Interested in working with us? Reach out for pricing or questions
              for any of our services.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      {/* Fifth Body */}
      <div className="home-fifth-body">
        <h1 className="fifth-h1">Reviews Tell the Truth</h1>
        <div className="review-boxes">
          <div className="review-box">
            <h2>James Lenn</h2>
            <img loading="lazy" className="pfl-pic" src={james} alt="" />
            <p>"They made my boating experience amazing with their professionalism and reliability."</p>
            <div className="star-box">
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
            </div>
          </div>
          <div className="review-box">
            <h2>Midas Hawke</h2>
            <img loading="lazy" className="pfl-pic" src={midas} alt="" />
            <p>"I've recieved consistent top-notch service, ensuring my boat is always ready for trips."</p>
            <div className="star-box">
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
              <img loading="lazy" src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
      </ Layout>
    </>
  );
};
