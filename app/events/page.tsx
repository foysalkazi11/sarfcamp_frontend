import React from "react";
import EventContent from "../_components/events/EventContent";
import SignUpForm from "../_components/events/SignUpForm";

const Events = () => {
  return (
    <main className="events">
      <div className="events__currentEvent">
        <EventContent />
        <SignUpForm />
      </div>
    </main>
  );
};

export default Events;
