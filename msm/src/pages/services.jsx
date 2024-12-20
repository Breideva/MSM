//  Rouer Links
import { Link } from "react-router-dom";

// Layout
import { Layout } from "../components/layout";

// Styles
import "../styles/services.css";

// Images
// import { CheckCircle } from "phosphor-react";
import CheckCircle from "../assets/other-imgs/check-circle.avif";

// Gsap
import { servicesAnimation } from "../animation/servicesAnimation";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    servicesAnimation();
  }, []);

  return (
    <>
      <Layout>
        <div className="main-sidebar">
          <div className="sidebar">
            <a href="#captain" className="sidebar-link">
              <h2>USGC Captains</h2>
            </a>
            <a href="#detail" className="sidebar-link">
              <h2>Detailing</h2>
            </a>
            <a href="#hull" className="sidebar-link">
              <h2>Hull/Bottom Cleaning</h2>
            </a>
            <a href="#monthly" className="sidebar-link">
              <h2>Monthly Management Plans</h2>
            </a>
            <a href="#boat" className="sidebar-link">
              <h2>Boat Watch</h2>
            </a>
            <a href="#tech" className="sidebar-link">
              <h2>Marine Techs</h2>
            </a>
            <a href="#prep" className="sidebar-link">
              <h2>Hurricane Preperation</h2>
            </a>
          </div>
        </div>
        <div className="services-content">
          <div className="services-header">
            <h1 className="serv-title" id="captain">
              Services
            </h1>
          </div>
          <div className="services">
            <div className="services-title">
              <img src={CheckCircle} className="check" />
              <Link to="/usgc-captains" className="title-link">
                <h3 id="detail">USGC Captains</h3>
              </Link>
            </div>
            <p className="serv-para">
              Our USGC Captains are certified experts, ensuring top-tier
              maritime operations with unmatched professionalism and safety.
              With extensive knowledge in navigation and regulations, they
              provide reliable and exceptional service for all your boating
              needs.
            </p>
            <div className="services-title">
              <img src={CheckCircle} className="check" />
              <Link to="/detailing" className="title-link">
                <h3 id="hull">Detailing</h3>
              </Link>
            </div>
            <p className="serv-para">
              We offer comprehensive interior and exterior detailing services.
              For the interior, we vacuum your carpets thoroughly and use an
              extractor to deep-clean and remove any stains from the seats and
              carpets. On the exterior, we provide a meticulous deep wash,
              followed by a clay bar treatment to eliminate surface
              contaminants. We also offer premium waxing and protective
              coatings, ranging from 3-month waxes to durable coatings lasting
              up to 3 years.
            </p>
            <div className="services-title">
              <img src={CheckCircle} className="check" />
              <Link to="/hull-bottom-cleaning" className="title-link">
                <h3 id="monthly">Hull/Bottom Cleaning</h3>
              </Link>
            </div>
            <p className="serv-para">
              Our hull and bottom cleaning service ensures your vessel performs
              optimally by removing marine growth and debris. With expert care,
              we enhance your boat's efficiency and longevity, providing a
              smooth and safe ride.
            </p>
            <div className="services-title">
              <img src={CheckCircle} className="check" />
              <Link to="/monthly-management-plans" className="title-link">
                <h3 id="boat">Monthly Management Plans</h3>
              </Link>
            </div>
            <p className="serv-para">
              Our monthly management plans offer comprehensive care, ensuring
              your boat remains in top condition year-round. With regular
              maintenance and inspections, we guarantee optimal performance and
              peace of mind for all your boating adventures.
            </p>
            <div className="services-title">
              <img src={CheckCircle} className="check" />
              <Link to="/boat-watch" className="title-link">
                <h3 id="tech">Boat Watch</h3>
              </Link>
            </div>
            <p className="serv-para">
              Our boat watch service provides vigilant monitoring and upkeep,
              ensuring your boat is secure and ready for use whenever you need
              it. With regular checks and maintenance, we safeguard your boat's
              integrity and readiness for smooth sailing.
            </p>
            <div className="services-title">
              <img src={CheckCircle} className="check" />
              <Link to="/marine-techs" className="title-link">
                <h3 id="prep">Marine Techs</h3>
              </Link>
            </div>
            <p className="serv-para">
              Our marine techs are dedicated professionals specializing in
              marine marine engines, delivering expert maintenance and repair
              services. With their specialized knowledge and precision, they
              ensure optimal performance and reliability for your boat's marine
              engine.
            </p>
            <div className="services-title">
              <img src={CheckCircle} className="check" />
              <Link to="/hurricane-prep" className="title-link">
                <h3>Hurricane Preperation</h3>
              </Link>
            </div>
            <p className="serv-para">
              We provide comprehensive hurricane preparedness services for boat
              owners, ensuring safety and minimizing potential damage. Our team
              helps secure boats, prepares emergency kits, and designs
              customized evacuation plans, so you’re fully prepared for any
              storm.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Services;
