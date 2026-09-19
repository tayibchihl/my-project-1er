import React from "react";
import Card from "./card";
import { cardData } from "./data";

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
          <span>Welcome</span>
          <h1>For Better Learning</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <a href="#" className="btn btn-red">
            Get Quote Now
          </a>
          <a href="#" className="btn btn-transparent">
            Learn More
          </a>
        </div>

        <div className="card-container">
          {cardData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
