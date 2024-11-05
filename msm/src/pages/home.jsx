// Router Links
import { Link } from "react-router-dom";

// Layout
import { Layout } from "../components/layout";

// Styles
import "../styles/home.css";

// Images
import Sunset from "../assets/imgs/sunset.avif";
import Sunset2 from "../assets/imgs/sunset-2.avif";
import BoatFront from "../assets/imgs/boat-front.avif";
import BoatBack from "../assets/imgs/back-of-boat.avif";
import Midas from "../assets/imgs/Midas-prfl.png";
import James from "../assets/imgs/James-prfl.png";
import Fishing2 from "../assets/imgs/Fishing-4.avif";

// Gsap
import { homeAnimation } from "../animation/homeAnimation";
import { useEffect } from "react";

//Components
import ReviewBox from "../components/reviewbox";

const Home = () => {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <>
      <Layout>
        {/* Header */}
        <div className="home-header">
          <h1 className="header-h1">Unleash Your Boat's Potential</h1>
          <h3 className="header-h3">Explore our reliable services</h3>
        </div>
        <div className="header-boxes">
          <Link to="/services" className="box-link">
            <div className="header-box">
              <h2>Expore Services</h2>
              <p>View work and services we provide </p>
            </div>
          </Link>
          <Link to="/faq" className="box-link">
            <div className="header-box">
              <h2>Browse the FAQ </h2>
              <p>Look at frequently asked questions</p>
            </div>
          </Link>
          <Link to="/about" className="box-link">
            <div className="header-box">
              <h2>Learn About us </h2>
              <p>Get to know the ones who help you</p>
            </div>
          </Link>
        </div>
        {/* First Body */}
        <div className="home-first-body">
          <div className="first-content">
            <h1>Experience the Difference on Water</h1>
            <p>
              Embark on new water adventures with our trusted and professional
              marine services by your side. Explore the endless horizons and
              create unforgettable memories.
            </p>
          </div>
          <img
            loading="lazy"
            className="sunset-1 sunset"
            src={Sunset}
            alt="Sunset"
          />
          <img
            loading="lazy"
            className="sunset-2 sunset"
            src={Sunset2}
            alt="Sunset with man in front"
          />
        </div>
        {/* Wave Layer */}
        <div className="wave-1">
          <div className="svg layer-1"></div>
        </div>
        {/* Second Body */}
        <div className="home-second-body">
          <div className="second-body-content">
            <h1 className="second-body-header">Need Some Answers?</h1>
            <Link to="/faq">
              <button className="second-body-button">View FAQ</button>
            </Link>
          </div>
        </div>
        {/* Third Body */}
        <div className="home-third-body">
          <div className="home-third-content">
            <div className="text-box">
              <h1>Why choose Marine Services & Management</h1>
              <p>
                Choose us for expert boat care and exceptional service. We
                ensure your boat performs at its best.
              </p>
              <Link to="/services">
                <button>Check Out Services</button>
              </Link>
            </div>
            <img
              loading="lazy"
              className="normal-img"
              src={BoatFront}
              alt="Front of a boat"
            />
          </div>
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
              comprehensive boat maintenance and repair, specializing in
              outboard engines and electrical systems to keep your boat running
              smoothly and reliably.
            </h2>
          </div>
          <div className="body-main">
            <img src={Fishing2} alt="Back of a boat" />
            <div className="body-text">
              <p>
                Interested in working with us? Reach out for pricing or
                questions for any of our services.
              </p>
              <Link to="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Fifth Body */}
        <div className="home-fifth-body">
          <div className="home-heading">
            <h1 className="fifth-h1">Reviews Tell the Truth</h1>
            <p>
              We've had the pleasure of working with a diverse array of clients,
              and their reviews highlight the quality of our service.
            </p>
          </div>
          <div className="review-boxes-scroll">
            <div className="review-boxes">
              <ReviewBox
                name="Ethan Caldwell"
                position="Workhand for BoatMotor NT"
                imageSrc={Midas}
                reviewText="I've received consistent amazing service, they've always ensured my boat is ready for trips and taken care of."
                stars={5}
              />
              <ReviewBox
                name="Alex Hayes"
                position="Product Manager at FFC"
                imageSrc={James}
                reviewText="Their detailing work has helped make my boat look immaculate. Their attention to detail is unmatched."
                stars={5}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
