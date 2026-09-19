import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ description, img, job, name, stars }) => {
  return (
    <div className="review">
      <span className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
      <p className="description">{description}</p>
      <div className="person">
        <img src={img} alt={name} />
        <div>
          <h3 className="text-primary">{name}</h3>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
