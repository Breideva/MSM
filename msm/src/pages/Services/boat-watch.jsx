import Fishing from "../../assets/imgs/Fishing-3.avif";
import Starfish from "../../assets/imgs/IMG_4167.avif";
import "../../styles/Services/service-pages.css"
import { Layout } from "../../components/layout";
import { servicePageAnimation } from "../../animation/servicePagesAnimation";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Watch = () => {
  useEffect(() => {
    servicePageAnimation();
  }, []);
  return (
    <>
      <Layout >
      <div className="service-pages-main">
        <div className="extra-header">
          <h1 className="page-h1">Boat Watch</h1>
        </div>
        <div className="ser-body f-body">
          <div className="content cont-1">
            <h2>
              Ensure peace of mind with our comprehensive boat watch service,
              tailored to keep your boat safe and well-maintained in your
              absence. Our experienced team conducts regular inspections,
              safeguarding against potential damage and ensuring all systems are
              operational.
            </h2>
          </div>

          <img className="page-img-1" src={Fishing} alt="" />
        </div>
        <div className="ser-body s-body">
          <div className="content cont-2">
            <h3>
              From checking for leaks to monitoring battery health and ensuring
              secure mooring, we provide thorough care so your boat is always
              ready for your next adventure.
            </h3>
            <Link to="/contact">
            <button>Learn More</button>
            </Link>
          </div>

          <img className="page-img-2" src={Starfish} alt="" />
        </div>
      </div>
      </Layout>
    </>
  );
};
export default Watch;