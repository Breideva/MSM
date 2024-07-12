// Layout
import { Layout } from "../components/layout";

// Styles
import "../styles/contact.css";

// Images
import squaresThree from "../assets/other-imgs/Square-Img-3.png";

// Gsap
import { contactAnimation } from "../animation/contactAnimation";
import { useEffect } from "react";


export const Contact = () => {

    useEffect(() => {
      contactAnimation()
    }, []);
  

  return (
    <>
      <Layout >
      <div className="contact-main">
        <form className="contact-content">
          <div className="contact-header">
            <h1>Need to get in touch?</h1>
          </div>
          <div className="box-contact">
            <div>
              <h2>First Name</h2>
              <input type="text" />
            </div>
            <div>
              <h2>Last Name</h2>
              <input type="text" />
            </div>
          </div>
          <div className="box-contact">
            <div>
              <h2>Email Address</h2>
              <input type="email" />
            </div>
            <div>
              <h2>Phone Number</h2>
              <input type="text" />
            </div>
          </div>
          <div  className="box-contact">
            <h2>Comments & Questions</h2>
            <textarea className="last-box"></textarea>
          </div>
          <div className="btn-box">
          <button>Submit</button>
          </div>
        </form>
        <img className="sqr-three" src={squaresThree} alt="" />
      </div>
      </ Layout>
    </>
  );
};
