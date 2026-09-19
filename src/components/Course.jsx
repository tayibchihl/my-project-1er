import React from "react";
import { FaStar, FaRegBell, FaBookOpen, FaChevronRight } from "react-icons/fa";

const Course = ({
  img,
  department,
  rating,
  description,
  sales,
  price,
  discount,
  duration,
  lessons,
}) => {
  return (
    <div className="course">
      <img src={img} alt={department} />
      <div className="content">
        <div className="course-field">
          <p className="department">{department}</p>
          <p className="rating">
            {rating} <FaStar />
          </p>
        </div>
        <h3>{department}</h3>
        <p className="description">{description}</p>
        <p className="sales">{sales} sales</p>
        <div className="price">
          <span className="discount">{discount}</span>
          <span className="main-price">{price}</span>
        </div>
        <div className="course-info">
          <p>
            <FaRegBell /> {duration}
          </p>
          <p>
            <FaBookOpen /> {lessons}
          </p>
        </div>
        <a href="#" className="btn-learn">
          Learn More <FaChevronRight />
        </a>
      </div>
    </div>
  );
};

export default Course;
