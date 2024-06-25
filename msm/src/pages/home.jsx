import { Navbar } from "../components/navbar";
import "../styles/home.css";
import { Link } from "react-router-dom";

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
          <h2>Check out services</h2>
          <p>View work and services we provide</p>
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
    </>
  );
};
