import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/other-imgs/Logo.png";
import { TwitterLogo, InstagramLogo, SnapchatLogo } from "phosphor-react";
import layeredWave from "../assets/other-imgs/blurry-gradient-haikei.svg"

export const Footer = () => {
  return (
    <>
      <div className="footer-main main-bck-img">
      <a href="/">
              <img className="logo-img" src={logo} alt="logo" />
              </a>
        <div className="footer-content">
          <div className="info-content">
            <a href=""><h2>msm.239.305.@gmail.com</h2></a>
            <h2>Naples, FL</h2>
            <h2>239-994-3213</h2>
          </div>
          <div className="links-content">
            <div className="social-media">
              <a href="">
                <TwitterLogo className="sm-logo"/>
              </a>
              <a href="">
                <InstagramLogo className="sm-logo"/>
              </a>
              <a href="">
                <SnapchatLogo className="sm-logo"/>
              </a>
            </div>
            <div className="important">
              <Link className="imp-link">
                <h2>Privacy</h2>
              </Link>
              <h3>|</h3>
              <Link className="imp-link">
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
