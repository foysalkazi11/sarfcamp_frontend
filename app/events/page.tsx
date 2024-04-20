import React from "react";
import EventContent from "../_components/events/EventContent";
import SignUpForm from "../_components/events/SignUpForm";
import { calculateContainerWiderItemWidth } from "@/utils/calculateContainerItmesWidth.utils";
import Markdown from "react-markdown";
import { arrangeEventsData, fetchDataFormStrapi } from "@/utils/strapi.utils";
import FeaturedArticles from "../_components/blog/FeaturedArticles";
import { TSingleEventData } from "@/types/types";
import qs from "qs";
const containerWidth = 1440; // Container width in pixels
const gap = 94; // Gap between items in pixels
const padding = 47+55; // Padding on both sides in pixels
const numberOfItems = 2; // Number of items
const widerItemWidth = 664; // Width of the wider item in pixels

const description =   <>
 <Markdown className="copy">
        Staying in touch with our website is your ticket to catching the wave of
        exciting upcoming events at our surfing school! By subscribing to our
        updates, you&apos;ll be the first to know about: 
      </Markdown>
      <Markdown className="copy">
         🏄‍♂️ Epic Surf Sessions: Get
        the scoop on our thrilling surf lessons, workshops, and camps designed
        for surfers of all levels, from beginners to advanced riders.
      </Markdown>
      <Markdown className="copy">
         🌊 Surfing
        Competitions: Stay informed about local and regional surf competitions,
        where you can witness top talent and even participate if you&apos;re up for
        the challenge.
      </Markdown>
      <Markdown className="copy">
          🏝️ Surf Retreats: Discover exclusive surf retreats in
        breathtaking locations, perfect for a rejuvenating getaway that combines
        surfing and relaxation.
      </Markdown>
      <Markdown className="copy">
          📅 Event Calendar: Our website keeps you
        up-to-date with a comprehensive event calendar, so you never miss a
        single opportunity to ride the waves.
      </Markdown>
      <Markdown className="copy">
           🤙 Special Offers: Be the first to
        access special offers, discounts, and promotions for our surfing
        programs and gear. Join our surfing community by staying connected
        through our website, and be ready to dive into the world of thrilling
        waves, endless adventures, and unforgettable memories!
      </Markdown>
</>

const queryStr = qs.stringify({
  pagination:{
    start:0,
    limit:12,
  },
  populate:{
    image:{
      populate:"*"
    },
    participants:{
      fields: ['firstName', 'email'],
    }

  },
  filters:{
    startDate:{
      $gt:new Date()
    }
  },
  sort:["startDate:asc"]
},{encodeValuesOnly: true})

const Events =  async() => {
  const result = calculateContainerWiderItemWidth(containerWidth,gap,padding,numberOfItems,widerItemWidth)
  const rowData = await fetchDataFormStrapi(`/api/events/?${queryStr}`);
    const eventsData :TSingleEventData[] = arrangeEventsData(rowData)
    
    
  return (
    <main className="events">
      <div className="events__currentEvent">
        <EventContent name='You want to stay tuned for our events?'  description={description} width={"49"}/>
        <SignUpForm width={"45"} />
      </div>
        <FeaturedArticles
          heading={"Upcoming camps & events"}
          articles={eventsData.map(event =>({headline:event.name,date:event.startDate,price:`Prices stating at ${event.SinglePrice}$`,slug:`${event.id}`,featuredImage:event.image,href:`/events/${event.id}`}))}
          numberOfItemsToShowFirstTime={3}
        />
    </main>
  );
};

export default Events;
