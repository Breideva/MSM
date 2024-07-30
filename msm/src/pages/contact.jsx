// Layout
import { Layout } from "../components/layout";

// Styles
import "../styles/contact.css";

// Images
import SquaresThree from "../assets/other-imgs/Square-Img-3.png";

// Gsap
import { contactAnimation } from "../animation/contactAnimation";
import { useEffect, useState } from "react";

 const Contact = () => {
  const [result, setResult] = useState("Submit");

  useEffect(() => {
    contactAnimation();
  }, []);

  const send = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d0217ef6-ce1a-453b-99ec-dcabc9ae9844");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An error occurred");
    }
  };

  return (
    <Layout>
      <div className="contact-main">
        <form onSubmit={send} className="contact-content">
          <div className="contact-header">
            <h1>Need to get in touch?</h1>
          </div>
          <div className="box-contact">
            <div>
              <h2>First Name</h2>
              <input name="first_name" placeholder="John" type="text" required />
            </div>
            <div>
              <h2>Last Name</h2>
              <input name="last_name" placeholder="Doe" type="text" required />
            </div>
          </div>
          <div className="box-contact">
            <div>
              <h2>Email Address</h2>
              <input name="email" placeholder="John.Doe@gmail.com" type="email" required />
            </div>
            <div>
              <h2>Phone Number</h2>
              <input name="phone" placeholder="123-456-7890" type="text" />
            </div>
          </div>
          <div className="box-contact">
            <h2>Comments & Questions</h2>
            <textarea name="message" placeholder="Enter your comments or questions here..." className="last-box" required></textarea>
          </div>
          <div className="btn-box">
            <button type="submit">{result}</button>
          </div>
        </form>
        <img className="sqr-three" src={SquaresThree} alt="colorful squares" />
      </div>
    </Layout>
  );
};

export default Contact