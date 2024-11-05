import BoatFront from "../../assets/imgs/IMG_3944.avif";
import Engine from "../../assets/imgs/IMG_2049.avif";
import "../../styles/Services/service-pages.css"
import { Layout } from "../../components/layout";
import { servicePageAnimation } from "../../animation/servicePagesAnimation";
import { useEffect } from "react";
import { Link } from "react-router-dom";


 const Detail = () => {
  useEffect(() => {
    servicePageAnimation();
  }, []);
  return (
    <>
      <Layout >
      <div className="service-pages-main">
        <div className="extra-header">
          <h1 className="page-h1">Deatailing</h1>
        </div>
        <div className="ser-body f-body">
          <div className="content cont-1">
            <h2>
              We specialize in keeping your boat in pristine condition. Our
              offerings include demo washes, salt washes, and customizable
              detail programs available on call or scheduled bi-weekly or
              monthly. Trust our expert team to protect your investment and
              ensure your boat looks and performs at its best.
            </h2>
          </div>

          <img className="page-img-1" src={BoatFront} alt="" />
        </div>
        <div className="ser-body s-body">
          <div className="content cont-2">
            <h3>
              Our team utilizes advanced techniques and premium products to
              deliver superior results, addressing every detail from hull to
              deck with meticulous care.
            </h3>
            <Link to="/contact">
            <button>Learn More</button>
            </Link>
          </div>

          <img className="page-img-2" src={Engine} alt="" />
        </div>
      </div>
      </Layout>
    </>
  );
};
export default Detail;