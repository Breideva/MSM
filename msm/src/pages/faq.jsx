// Layout
import { Layout } from "../components/layout";
import Faqbox from "../components/faqbox";

// Styles
import "../styles/faq.css";

import Square2 from "../assets/other-imgs/Square-Img-2.png"
import { useEffect } from "react";
import { faqAnimation } from "../animation/faqAnimation";

const Faq = () => {

  useEffect(() => {
    faqAnimation();
  }, []);

  return (
    <>
      <Layout>
        <div className="faq-main">
          <div className="faq-header">
            <h1>FAQ</h1>
          </div>
          <img className="square-2" src={Square2} alt="" />
          <div className="faq-boxes">
            <Faqbox
              question="How do I know when my boat needs maintenance?"
              answer="Signs include unusual noises, decreased performance, or visible wear. Regular check-ups help prevent issues."
            />
            <Faqbox
              question="How can I book a service or request a quote?"
              answer="Visit our Contact page or call us directly to book a service or request a quote."
            />
            <Faqbox
              question="What makes your marine services stand out from the competition?"
              answer="We deliver high-quality service with a skilled team and a focus on detail and customer satisfaction."
            />
            <Faqbox
              question="Do you offer emergency repair services?"
              answer="Yes, we provide emergency repairs for urgent issues. Contact us immediately for quick assistance."
            />
            <Faqbox
              question="Are your services available for all types of boats?"
              answer="Yes, we service various types of boats, including pleasure craft and fishing boats."
            />
            <Faqbox
              question="What are the payment options you accept?"
              answer="We accept various payment methods, including credit cards and bank transfers."
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Faq;
