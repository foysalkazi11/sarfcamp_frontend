"use client";
import React from "react";

const SubscribeToNewsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__info">
        <h4>Subscribe to our newsletter</h4>
        <p className="copy">
          Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
          Newsletter Today to always stay in touch
        </p>
      </div>
      <form className="newsletter__subscribe">
        <input
          type="email"
          className="newsletter__input"
          placeholder="Enter your E-mail address"
        />
        <button type="submit" className="newsletter__button">
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default SubscribeToNewsletter;
