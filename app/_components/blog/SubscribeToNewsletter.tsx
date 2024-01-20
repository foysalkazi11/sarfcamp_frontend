"use client";
import React, { useState } from "react";

const SubscribeToNewsletter = () => {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.length) {
      setHasSignedUp(true);
    }
    console.log(e);
  };
  return (
    <section className="newsletter">
      {hasSignedUp ? (
        <h4 className="newsletter__thanks">Thank you for sighing up</h4>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>Subscribe to our newsletter</h4>
            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>
          <form onSubmit={handleSubmit} className="newsletter__subscribe">
            <input
              type="email"
              className="newsletter__input"
              placeholder="Enter your E-mail address"
              value={email}
              onChange={handleChange}
            />
            <button type="submit" className="newsletter__button">
              SUBSCRIBE
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default SubscribeToNewsletter;
