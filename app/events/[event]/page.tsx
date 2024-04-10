import FeaturedArticles from '@/app/_components/blog/FeaturedArticles'
import EventContent from '@/app/_components/events/EventContent'
import SignUpForm from '@/app/_components/events/SignUpForm'
import { TSingleEventData } from '@/types/types'
import { arrangeEventsData, arrangeSingleVentData, fetchDataFormStrapi } from '@/utils/strapi.utils'
import qs from 'qs'
import React from 'react'
import Markdown from 'react-markdown'

 const queryString =(eventId:string) =>{
  return  qs.stringify({
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
    },
    id:{
      $ne:eventId
    }
  },
  sort:["startDate:asc"]
},{encodeValuesOnly: true})
 }

const SingleEvent = async ({ params }: { params: { event: string } }) => {
    
    const rowData = await fetchDataFormStrapi(`/api/events/?${queryString(params.event)}`);
    const eventsData : TSingleEventData[] = arrangeEventsData(rowData)
    const singleEventRowData  = await fetchDataFormStrapi(`/api/events/${params.event}?populate=*`);
    const singleEventData : TSingleEventData = arrangeSingleVentData(singleEventRowData);
    
    const pricing = {
        singlePrice: singleEventData?.SinglePrice,
        sharedPrice: singleEventData?.sharedPrice
    }

    const description= <Markdown  className="copy">{singleEventData?.description}</Markdown>
  return (
     <main className="events">
      <div className="events__currentEvent">
        <EventContent name={singleEventData?.name} description={description} width={"49"}/>
        <SignUpForm pricing={pricing} width={"45"} eventId={params?.event} btnText='Sing Up' />
      </div>
       <FeaturedArticles
          heading={"Upcoming camps & events"}
          articles={eventsData.map(event =>({headline:event.name,date:event.publishedAt,price:`Prices stating at ${event.SinglePrice}$`,slug:`${event.id}`,featuredImage:event.image,href:`/events/${event.id}`}))}
          numberOfItemsToShowFirstTime={3}
        />
    </main>
  )
}

export default SingleEvent

export const generateStaticParams = async () =>{
    try {
        const eventsData = await fetchDataFormStrapi("/api/events");
    return eventsData.map((post: any) => ({
      event: String( post?.id),
    }));
    } catch (error) {
        console.log("Failed to generate params for event: " + error);
        
    }
}

export const revalidate = 300;