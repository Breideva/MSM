import { Navbar } from "../components/navbar";
import squaresThree from "../assets/other-imgs/Square-Img-3.png";
import "../styles/contact.css";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-main">
        <div className="contact-content">
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
              <input type="text" />
            </div>
            <div>
              <h2>Phone Number</h2>
              <input type="text" />
            </div>
          </div>
          <div  className="box-contact">
            <h2>Comments & Questions</h2>
            <input className="last-box" type="text" />
          </div>
        </div>
        <img src={squaresThree} alt="" />
      </div>
    </>
  );
};
