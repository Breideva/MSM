import { Navbar } from "../../components/navbar";
import sunset from "../../assets/imgs/sunset.png";
import sunsetTwo from "../../assets/imgs/sunset-2.png";
import "../../styles/Services/service-pages.css"

export const Mercury = () => {
  return (
    <>
      <Navbar />
      <div className="service-pages-main">
        <div className="extra-header">
          <h1>Mercury</h1>
        </div>
        <div className="ser-body f-body">
          <div className="content">
            <h2>
              Experience top-notch marine service with our team of certified
              Mercury technicians. Whether you need routine maintenance, engine
              repairs, or diagnostics, our technicians have the expertise to
              keep your boat running smoothly. We pride ourselves on adhering to
              manufacturer guidelines, ensuring reliability and performance.
            </h2>
          </div>

          <img src={sunset} alt="" />
        </div>
        <div className="ser-body s-body">
          <div className="content">
            <h2>
              Trust our dedicated Mercury techs to provide meticulous care for
              your vessel, so you can enjoy worry-free boating adventures.
            </h2>
            <button>Learn More</button>
          </div>

          <img src={sunsetTwo} alt="" />
        </div>
      </div>
    </>
  );
};
