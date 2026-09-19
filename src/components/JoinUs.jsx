import React from "react";

const JoinUs = () => {
  return (
    <section id="joinus" className="joinus">
      <div className="content">
        <p className="text-primary">Practice Advice</p>
        <h2>JOIN US</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
