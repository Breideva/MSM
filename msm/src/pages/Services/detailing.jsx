import { Navbar } from "../../components/navbar";
import sunset from "../../assets/imgs/sunset.png";
import sunsetTwo from "../../assets/imgs/sunset-2.png";
import "../../styles/Services/service-pages.css"
export const Detail = () => {
  return (
    <>
      <Navbar />
      <div className="service-pages-main">
        <div className="extra-header">
          <h1>Deatailing</h1>
        </div>
        <div className="ser-body f-body">
          <div className="content">
            <h2>
              We specialize in keeping your vessel in pristine condition. Our
              offerings include demo washes, salt washes, and customizable
              detail programs available on call or scheduled bi-weekly or
              monthly. Trust our expert team to protect your investment and
              ensure your boat looks and performs at its best.
            </h2>
          </div>

          <img src={sunset} alt="" />
        </div>
        <div className="ser-body s-body">
          <div className="content">
            <h2>
              Our team utilizes advanced techniques and premium products to
              deliver superior results, addressing every detail from hull to
              deck with meticulous care.
            </h2>
            <button>Learn More</button>
          </div>

          <img src={sunsetTwo} alt="" />
        </div>
      </div>
    </>
  );
};
