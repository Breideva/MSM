import Sunset from "../../assets/imgs/IMG_4244.avif";
import Ocean from "../../assets/imgs/IMG_4020.avif";
import "../../styles/Services/service-pages.css";
import { Layout } from "../../components/layout";
import { servicePageAnimation } from "../../animation/servicePagesAnimation";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Marine = () => {
  useEffect(() => {
    servicePageAnimation();
  }, []);
  return (
    <>
      <Layout>
        <div className="service-pages-main">
          <div className="extra-header">
            <h1 className="page-h1">Marine Techs</h1>
          </div>
          <div className="ser-body f-body">
            <div className="content cont-1">
              <h2>
                Experience top-notch marine service with our team of certified
                marine technicians. Whether you need routine maintenance,
                engine repairs, or diagnostics, our technicians have the
                expertise to keep your boat running smoothly. We pride ourselves
                on adhering to manufacturer guidelines, ensuring reliability and
                performance.
              </h2>
            </div>
            <img className="page-img-1" src={Ocean} alt="" />
          </div>
          <div className="ser-body s-body">
            <div className="content cont-2">
              <h3>
                Trust our dedicated marine techs to provide meticulous care for
                your boat, so you can enjoy worry-free boating adventures.
              </h3>
              <Link to="/contact">
                <button>Learn More</button>
              </Link>
            </div>
            <img className="page-img-2" src={Sunset} alt="" />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Marine;