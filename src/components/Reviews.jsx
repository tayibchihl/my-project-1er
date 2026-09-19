import React from "react";
import SectionHeader from "./SectionHeader";
import Review from "./Review";
import { ritenData } from "./data";

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title="Each and every client is important"
          description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        />
        <div className="riten">
          {ritenData.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
