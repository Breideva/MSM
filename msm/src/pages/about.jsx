import "../styles/about.css";
import { Navbar } from "../components/navbar";
import Guys from "../assets/imgs/Guys-With-Fish.png"
import Squarefour from "../assets/other-imgs/Square-Img-4.png"

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-main">
        <div className="f-content">
          <h1>Learn About Us</h1>
          <h2>
            Marine Services and Management has been dedicated to providing
            exceptional boat care and maintenance for over 20 years. Our team of
            Mercury-certified technicians specializes in servicing and
            maintaining inboard diesel engines, ensuring your vessel operates at
            peak performance.{" "}
          </h2>
        </div>
        <div className="s-content">
          <img src={Guys} alt="" />
          <h3>
            With decades of experience and a commitment to excellence, we offer
            comprehensive engine maintenance and repair services to keep your
            boat running smoothly and reliably. Trust Marine Services and
            Management for all your marine needs, where quality and expertise
            are our top priorities.
          </h3>
        </div>
        <div className="squares">
        <img src={Squarefour} alt="" />
        </div>
      </div>
    </>
  );
};
