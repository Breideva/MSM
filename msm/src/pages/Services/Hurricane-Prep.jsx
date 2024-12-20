import Grass from "../../assets/imgs/GrassHallway.avif";
import Sky from "../../assets/imgs/SkyClouds.avif";
import "../../styles/Services/service-pages.css";
import { Layout } from "../../components/layout";
import { servicePageAnimation } from "../../animation/servicePagesAnimation";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HurricanePrep = () => {
  useEffect(() => {
    servicePageAnimation();
  }, []);

  return (
    <>
      <Layout>
        <div className="service-pages-main">
          <div>
            <h1 className="page-h1">Hurricane Preperation</h1>
          </div>
          <div className="ser-body f-body">
            <div className="content cont-1">
              <h2>
                Offering expert tips to help boat owners prepare for hurricanes,
                including options to relocate boats or securely tie them down.
                Our goal is to ensure your boat is safe and protected before the
                storm hits. With our tailored advice and hands-on assistance,
                you can have peace of mind knowing your boat is ready for any
                situation.
              </h2>
            </div>
            <img className="page-img-1" src={Grass} alt="" />
          </div>
          <div className="ser-body s-body">
            <div className="content cont-2">
              <h3>
                Located in SWFL, we offer in-person services locally and provide
                online tips and advice for boat owners everywhere.
              </h3>
              <Link to="/contact">
                <button>Learn More</button>
              </Link>{" "}
            </div>
            <img className="page-img-2" src={Sky} alt="" />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default HurricanePrep;
