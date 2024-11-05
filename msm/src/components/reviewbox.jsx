import "../styles/home.css";
import Star from "../assets/other-imgs/Star.png";

const ReviewBox = ({ name, position, imageSrc, reviewText, stars }) => {
  return (
    <div className="review-box">
      <div className="review-content">
        <div className="review-image">
          <img
            loading="lazy"
            className="pfl-pic"
            src={imageSrc}
            alt={`Picture of ${name}`}
          />
        </div>
        <div className="review-info">
          <div className="review-person">
            <h2>{name}</h2>
            <p>{position}</p>
          </div>
          <div className="review-para">
          <h3>"{reviewText}"</h3>
          </div>
        </div>
      </div>
      <div className="star-box">
        {Array.from({ length: stars }, (_, index) => (
          
          <img key={index} loading="lazy" src={Star} alt="Star" />
        ))}
      </div>
    </div>
  );
};

export default ReviewBox;
