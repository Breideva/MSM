import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";
import "../styles/services.css";
import { CheckCircle } from "phosphor-react";

export const Services = () => {
  return (
    <>
      <Navbar />
      <div className="main-sidebar">
        <div className="sidebar">
          <Link className="sidebar-link">
            <h2>USGC Captains</h2>
          </Link>
          <Link className="sidebar-link">
            <h2>Detailing</h2>
          </Link>
          <Link className="sidebar-link">
            <h2>Hull/Bottom Cleaning</h2>
          </Link>
          <Link className="sidebar-link">
            <h2>Monthly Management Plans</h2>
          </Link>
          <Link className="sidebar-link">
            <h2>Boat Watch</h2>
          </Link>
          <Link className="sidebar-link">
            <h2>Mercury Tech</h2>
          </Link>
        </div>
      </div>
      <div className="services-content">
        <div className="services-header">
          <h1>Services</h1>
        </div>
        <div className="services">
          <div className="services-title">
            <CheckCircle className="check"/>
            <Link class="title-link"><h3>Usgc cpatian</h3></Link>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              alias dolore cumque ad aliquid dolorum facilis blanditiis iure
              fugit nostrum.
            </p>
          <div className="services-title">
            <CheckCircle className="check"/>
            <Link class="title-link"><h3>Usgc cpatian</h3></Link>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              alias dolore cumque ad aliquid dolorum facilis blanditiis iure
              fugit nostrum.
            </p>
          <div className="services-title">
            <CheckCircle className="check"/>
            <Link class="title-link"><h3>Usgc cpatian</h3></Link>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              alias dolore cumque ad aliquid dolorum facilis blanditiis iure
              fugit nostrum.
            </p>
          <div className="services-title">
            <CheckCircle className="check"/>
            <Link class="title-link"><h3>Usgc cpatian</h3></Link>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              alias dolore cumque ad aliquid dolorum facilis blanditiis iure
              fugit nostrum.
            </p>
          <div className="services-title">
            <CheckCircle className="check"/>
            <Link class="title-link"><h3>Usgc cpatian</h3></Link>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              alias dolore cumque ad aliquid dolorum facilis blanditiis iure
              fugit nostrum.
            </p>
          <div className="services-title">
            <CheckCircle className="check"/>
            <Link class="title-link"><h3>Usgc cpatian</h3></Link>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              alias dolore cumque ad aliquid dolorum facilis blanditiis iure
              fugit nostrum.
            </p>
          
          
        </div>
      </div>
    </>
  );
};
