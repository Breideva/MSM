// Router Links
import { Link } from "react-router-dom";

// Styles
import "../styles/Components/footer.css";

// Images
// import { TwitterLogo, InstagramLogo, SnapchatLogo, FacebookLogo } from "phosphor-react";
import Logo from "../assets/other-imgs/Logo.png";

export const Footer = () => {
  return (
    <>
      <div className="footer-main ">
      <a href="/">
              <img className="logo-img" src={Logo} alt="logo" />
              </a>
        <div className="footer-content">
          <div className="info-content">
            <h2>Email:</h2>
            <a className="mail" href="mailto:MarineServicesAndManagement@msmboatcare.com"><h4>MarineServicesAndManagement@msmboatcare.com</h4></a>
            <h2>Loaction:</h2>
            <h4>Naples, FL</h4>
            <h2>Phone Number:</h2>
            <h4>239-994-3213</h4>
          </div>
          <div className="links-content">
            <div className="social-media">
              <a href="">
                {/* <TwitterLogo className="sm-logo"/> */}
              </a>
              <a href="">
                {/* <FacebookLogo className="sm-logo"/> */}
              </a>
              <a href="">
                {/* <InstagramLogo className="sm-logo"/> */}
              </a>
              <a href="">
                {/* <SnapchatLogo className="sm-logo"/> */}
              </a>
            </div>
            <div className="important">
              <Link to="/privacy" className="imp-link">
                <h2>Privacy</h2>
              </Link>
              <h3>|</h3>
              <Link to="/terms" >
                <h2>Terms and Conditions</h2>
              </Link>
            </div>
            <p>2024 Marine Services & Management</p>
          </div>
        </div>
      </div>
    </>
  );
};
