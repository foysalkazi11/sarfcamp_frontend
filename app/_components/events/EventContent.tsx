import React from "react";
import Markdown from "react-markdown";

type EventContentProps = {
  width: string
  name?:string
  description?:React.ReactNode
}
const EventContent = ({width,name="",description=""}: EventContentProps) => {
  return (
    <section className="eventContent" style={{width:width+"%"}}>
      <h3>{name}</h3>
      <div className="eventContent__contentContainer">
       {description}

      </div>
      
    </section>
  );
};

export default EventContent;
