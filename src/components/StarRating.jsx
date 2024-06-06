import React, { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = () => {

  const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);
  //const [hover, setHover] = useState(0);
  
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            type="starButton"
            key={index}
            className={index <= (rating) ? "on" : "off"}
            style={{cursor: "default"}}
            //onClick={() => setRating(index)}
            //onMouseEnter={() => setHover(index)}
            //onMouseLeave={() => setHover(rating)}
          >
            <span style={{ fontSize: 12 }}>
              <FontAwesomeIcon icon={faStar} />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
