// Layout
import { Layout } from "../components/layout";

// Styles
import "../styles/about.css";

// Images
import SunSet from "../assets/imgs/IMG_4187.avif";
import Squarefour from "../assets/other-imgs/Square-Img-4.png";

// Gsap
import { aboutAnimation } from "../animation/aboutAnimation";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    aboutAnimation();
  }, []);
  return (
    <>
      <Layout>
        <div className="about-main">
          <div className="f-content">
            <h1 className="h1-text">Learn About Us</h1>
            <h2 className="h2-text">
              Marine Services and Management has been dedicated to providing
              exceptional boat care and maintenance for over 20 years. Our team
              of Mercury-certified technicians specializes in servicing and
              maintaining inboard diesel engines, ensuring your vessel operates
              at peak performance.{" "}
            </h2>
          </div>
          <div className="s-content">
            <img
              className="image"
              src={SunSet}
              alt="Two guys with catch of fish"
            />
            <h3 className="h3-text">
              With decades of experience and a commitment to excellence, we
              offer comprehensive engine maintenance and repair services to keep
              your boat running smoothly and reliably. Trust Marine Services and
              Management for all your marine needs, where quality and expertise
              are our top priorities.
            </h3>
          </div>
          <div className="squares">
            <img
              className="squares-four"
              src={Squarefour}
              alt="colorful squares"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
