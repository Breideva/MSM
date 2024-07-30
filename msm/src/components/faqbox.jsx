import "../styles/faq.css"

const Faqbox = ({ question, answer }) => {
    return (
      <div className="faq-box">
        <h2>Question:</h2>
        <p>{question}</p>
        <h2>Answer:</h2>
        <p>{answer}</p>
      </div>
    );
  };
  
  export default Faqbox;