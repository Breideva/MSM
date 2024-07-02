import { Navbar } from "../../components/navbar";
import sunset from "../../assets/imgs/sunset.png";
import sunsetTwo from "../../assets/imgs/sunset-2.png";
import "../../styles/Services/service-pages.css"
export const Hull = () => {
  return (
    <>
      <Navbar />
      <div className="service-pages-main">
        <div className="extra-header">
          <h1>Hull/Bottom Cleaning</h1>
        </div>
        <div className="ser-body f-body">
          <div className="content">
            <h2>
              Ensure your boat's peak performance and fuel efficiency with our
              professional hull and bottom cleaning services. Our expert team
              removes marine growth, preventing damage and enhancing your
              vessel's speed and maneuverability. We ensure your vessel remains
              in top condition for all your aquatic adventures.
            </h2>
          </div>

          <img src={sunset} alt="" />
        </div>
        <div className="ser-body s-body">
          <div className="content">
            <h2>
              Regular hull cleaning not only protects your valuable investment
              but also significantly enhances the safety and enjoyment of your
              boating experience.
            </h2>
            <button>Learn More</button>
          </div>

          <img src={sunsetTwo} alt="" />
        </div>
      </div>
    </>
  );
};
