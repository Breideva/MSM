import Boat from "../../assets/imgs/BoatOnWater.avif";
import Guy from "../../assets/imgs/GuyWithFish.avif";
import "../../styles/Services/service-pages.css";
import { Layout } from "../../components/layout";
import { servicePageAnimation } from "../../animation/servicePagesAnimation";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Usgc = () => {
  useEffect(() => {
    servicePageAnimation();
  }, []);

  return (
    <>
      <Layout>
        <div className="service-pages-main">
          <div>
            <h1 className="page-h1">USGC Captains</h1>
          </div>
          <div className="ser-body f-body">
            <div className="content cont-1">
              <h2>
                We offer private captains for hire with qualifications ranging
                from 6-pack to 100-ton licenses. Our captains provide a variety
                of services including:
              </h2>
              <ul>
                <li>Fishing excursions</li>
                <li>Sunset cruises</li>
                <li>Beach days</li>
                <li>Burial at sea ceremonies</li>
                <li>Dolphin watching tours</li>
                <li>Personalized yacht parties</li>
              </ul>
            </div>
            <img className="page-img-1" src={Guy} alt="" />
          </div>
          <div className="ser-body s-body">
            <div className="content cont-2">
              <h3>
                Our private captains are dedicated to providing personalized
                service, ensuring each trip is tailored to exceed your
                expectations on the water.
              </h3>
              <Link to="/contact">
                <button>Learn More</button>
              </Link>{" "}
            </div>
            <img className="page-img-2" src={Boat} alt="" />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Usgc;
