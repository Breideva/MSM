import { Navbar } from "../../components/navbar";
import sunset from "../../assets/imgs/sunset.png";
import sunsetTwo from "../../assets/imgs/sunset-2.png";
import "../../styles/Services/service-pages.css"
export const Management = () => {
  return (
    <>
      <Navbar />
      <div className="service-pages-main">
        <div className="extra-header-2">
          <h1>Monthly Management Plans</h1>
        </div>
        <div className="ser-body f-body">
          <div className="content">
            <h2>
              Our monthly boat management plans ensure your vessel remains in
              top condition by thoroughly checking all systems, including the
              battery charger and load testing batteries. We make sure bilges
              are fully operational, bring engines up to temperature, check oil
              levels, and perform a fresh water flush.
            </h2>
          </div>

          <img src={sunset} alt="" />
        </div>
        <div className="ser-body s-body">
          <div className="content">
            <h3>
              Count on our comprehensive monthly boat management plans to
              maintain peak performance and reliability, tailored to meet the
              unique needs of your vessel.
            </h3>
            <button>Learn More</button>
          </div>

          <img src={sunsetTwo} alt="" />
        </div>
      </div>
    </>
  );
};
