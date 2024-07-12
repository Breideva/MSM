//  Rouer Links
import { Link } from "react-router-dom";

// Layout
import { Layout } from "../components/layout";

// Styles
import "../styles/services.css";

// Images
import { CheckCircle } from "phosphor-react";

// Gsap
import { servicesAnimation } from "../animation/servicesAnimation";
import { useEffect } from "react";

export const Services = () => {
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
              <h2>Mercury Tech</h2>
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
              <CheckCircle className="check" />
              <Link to="/usgc-captains" class="title-link">
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
              <CheckCircle className="check" />
              <Link to="/detailing" class="title-link">
                <h3 id="hull">Detailing</h3>
              </Link>
            </div>
            <p className="serv-para">
              Our detailing team delivers meticulous care, ensuring your vessel
              shines with pristine cleanliness and protection. Using premium
              products and techniques, we enhance the beauty and longevity of
              your boat.
            </p>
            <div className="services-title">
              <CheckCircle className="check" />
              <Link to="/hull-bottom-cleaning" class="title-link">
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
              <CheckCircle className="check" />
              <Link to="/monthly-management-plans" class="title-link">
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
              <CheckCircle className="check" />
              <Link to="/boat-watch" class="title-link">
                <h3 id="tech">Boat Watch</h3>
              </Link>
            </div>
            <p className="serv-para">
              Our Boat Watch service provides vigilant monitoring and upkeep,
              ensuring your boat is secure and ready for use whenever you need
              it. With regular checks and maintenance, we safeguard your boat's
              integrity and readiness for smooth sailing.
            </p>
            <div className="services-title">
              <CheckCircle className="check" />
              <Link to="/mercury-techs" class="title-link">
                <h3>Mercury Techs</h3>
              </Link>
            </div>
            <p className="serv-para">
              Our Mercury techs are dedicated professionals specializing in
              Mercury marine engines, delivering expert maintenance and repair
              services. With their specialized knowledge and precision, they
              ensure optimal performance and reliability for your boat's
              Mercury engine.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};
