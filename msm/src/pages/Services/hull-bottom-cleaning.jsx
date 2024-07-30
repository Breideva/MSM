import sunset from "../../assets/imgs/sunset.avif";
import sunsetTwo from "../../assets/imgs/sunset-2.avif";
import "../../styles/Services/service-pages.css"
import { Layout } from "../../components/layout";
import { servicePageAnimation } from "../../animation/servicePagesAnimation";
import { useEffect } from "react";
import { Link } from "react-router-dom";


 const Hull = () => {
  useEffect(() => {
    servicePageAnimation();
  }, []);
  return (
    <>
      <Layout >
      <div className="service-pages-main">
        <div className="extra-header">
          <h1 className="page-h1">Hull/Bottom Cleaning</h1>
        </div>
        <div className="ser-body f-body">
          <div className="content cont-1">
            <h2>
              Ensure your boat's peak performance and fuel efficiency with our
              professional hull and bottom cleaning services. Our expert team
              removes marine growth, preventing damage and enhancing your
              boat's speed and maneuverability. We ensure your boat remains
              in top condition for all your aquatic adventures.
            </h2>
          </div>

          <img className="page-img-1" src={sunset} alt="" />
        </div>
        <div className="ser-body s-body">
          <div className="content cont-2">
            <h3>
              Regular hull cleaning not only protects your valuable investment
              but also significantly enhances the safety and enjoyment of your
              boating experience.
            </h3>
            <Link to="/contact">
            <button>Learn More</button>
            </Link>
          </div>

          <img className="page-img-2" src={sunsetTwo} alt="" />
        </div>
      </div>
      </Layout>
    </>
  );
};
export default Hull;