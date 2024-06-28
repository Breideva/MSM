import React, { useEffect } from "react";
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
          <h1  id="captain">Services</h1>
        </div>
        <div className="services">
          <div  className="services-title">
            <CheckCircle className="check" />
            <Link class="title-link">
              <h3  id="detail">USGC Captains</h3>
            </Link>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est alias
            dolore cumque ad aliquid dolorum facilis blanditiis iure fugit
            nostrum.
          </p>
          <div className="services-title">
            <CheckCircle className="check" />
            <Link class="title-link">
              <h3 id="hull">Detailing</h3>
            </Link>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est alias
            dolore cumque ad aliquid dolorum facilis blanditiis iure fugit
            nostrum.
          </p>
          <div className="services-title">
            <CheckCircle className="check" />
            <Link class="title-link">
              <h3 id="monthly">Hull/Bottom Cleaning</h3>
            </Link>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est alias
            dolore cumque ad aliquid dolorum facilis blanditiis iure fugit
            nostrum.
          </p>
          <div className="services-title">
            <CheckCircle className="check" />
            <Link class="title-link">
              <h3 id="boat">Monthly Management Plans</h3>
            </Link>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est alias
            dolore cumque ad aliquid dolorum facilis blanditiis iure fugit
            nostrum.
          </p>
          <div className="services-title">
            <CheckCircle className="check" />
            <Link class="title-link">
              <h3 id="tech">Boat Watch</h3>
            </Link>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est alias
            dolore cumque ad aliquid dolorum facilis blanditiis iure fugit
            nostrum.
          </p>
          <div className="services-title">
            <CheckCircle className="check" />
            <Link class="title-link">
              <h3>Mecury Techs</h3>
            </Link>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est alias
            dolore cumque ad aliquid dolorum facilis blanditiis iure fugit
            nostrum.
          </p>
        </div>
      </div>
    </>
  );
};
