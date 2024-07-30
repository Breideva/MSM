import "../styles/home.css"
import Star from "../assets/other-imgs/Star.png"

const ReviewBox = ({ name, imageSrc, reviewText, stars }) => {
    return (
      <div className="review-box">
        <div className="review-header">
        <h2>{name}</h2>
        <img loading="lazy" className="pfl-pic" src={imageSrc} alt={`Picture of ${name}`} />
        </div>
        <div>
        <p>"{reviewText}"</p>
        <div className="star-box">
          {Array.from({ length: stars }, (_, index) => (
            <img key={index} loading="lazy" src={Star} alt="Star" />
          ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewBox;