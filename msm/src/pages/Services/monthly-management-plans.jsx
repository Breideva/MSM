import sunset from "../../assets/imgs/sunset.png";
import sunsetTwo from "../../assets/imgs/sunset-2.png";
import "../../styles/Services/service-pages.css"
import { Layout } from "../../components/layout";
import { servicePageAnimation } from "../../animation/servicePagesAnimation";
import { useEffect } from "react";

export const Management = () => {
  useEffect(() => {
    servicePageAnimation();
  }, []);
  return (
    <>
      <Layout >
      <div className="service-pages-main">
        <div>
          <h1 className="page-h1">Monthly Management Plans</h1>
        </div>
        <div className="ser-body f-body">
          <div className="content cont-1">
            <h2>
              Our monthly boat management plans ensure your boat remains in
              top condition by thoroughly checking all systems, including the
              battery charger and load testing batteries. We make sure bilges
              are fully operational, bring engines up to temperature, check oil
              levels, and perform a fresh water flush.
            </h2>
          </div>

          <img className="page-img-1" src={sunset} alt="" />
        </div>
        <div className="ser-body s-body">
          <div className="content cont-2">
            <h3>
              Count on our comprehensive monthly boat management plans to
              maintain peak performance and reliability, tailored to meet the
              unique needs of your vessel.
            </h3>
            <button>Learn More</button>
          </div>

          <img className="page-img-2" src={sunsetTwo} alt="" />
        </div>
      </div>
      </Layout>
    </>
  );
};
