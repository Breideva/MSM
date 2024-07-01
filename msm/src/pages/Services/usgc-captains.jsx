import { Navbar } from "../../components/navbar";
import sunset from "../../assets/imgs/sunset.png";
import sunsetTwo from "../../assets/imgs/sunset-2.png";
import "../../styles/service-pages.css";

export const Usgc = () => {
  return (
    <>
      <Navbar />
      <div className="service-pages-main">
        <div>
          <h1>USGC Captains</h1>
        </div>
        <div className="ser-body f-body">
          <div className="content">
            <h2>
              We offer private captains for hire with qualifications ranging
              from 6-pack to 100-ton licenses. Our captains provide a variety of
              services including:
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

          <img src={sunset} alt="" />
        </div>
        <div className="ser-body s-body">
          <div className="content">
            <h2>
              Our private captains are dedicated to providing personalized
              service, ensuring each trip is tailored to exceed your
              expectations on the water.
            </h2>
            <button>Learn More</button>
          </div>

          <img src={sunsetTwo} alt="" />
        </div>
      </div>
    </>
  );
};
