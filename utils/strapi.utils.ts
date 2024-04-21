import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

export const imageUrlFormat = (image:{[key : string]: string}) =>{
  return  {
        url: image?.url,
        hash: image?.hash,
      }
}


export async function fetchDataFormStrapi(route: string) : Promise<any>{
  try {
    const response = await axios.get(`${BASE_URL}${route}`);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch data from ${BASE_URL}`);
  }
}

export function arrangeInfoBlockData(response: { [key: string]: any }) {
  const rawData: any[] = response?.attributes?.info_blocks?.data;
  const arrangeData = rawData.map((infoBlock) => {
    const image = infoBlock?.attributes?.image?.data?.attributes;
    return {
      id: infoBlock?.id,
      ...infoBlock?.attributes,
      image: imageUrlFormat(image),
    };
  });

  return arrangeData;
}
export function arrangeBlogData(response: { [key: string]: any }) {
  const arrangeData = response.map((article: any) => {
    const image = article?.attributes?.featuredImage?.data?.attributes;
    return {
      ...article?.attributes,
      id: article?.id,
      featuredImage: imageUrlFormat(image),
      date: formatDate(article?.attributes?.publishedAt),
    };
  });

  return arrangeData;
}

export function formatDate(data: string) {
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(data).toLocaleDateString("en-US", options);
  return formattedDate;
}

// arrange Single vent data 

export const arrangeSingleVentData = (event:any) =>{
  const {id,attributes} = event;
    const image = attributes?.image?.data?.attributes;
    return {
      id: id,
      ...attributes,
       publishedAt: formatDate(attributes?.publishedAt),
       startDate: formatDate(attributes?.startDate),
      image: imageUrlFormat(image),
    }
}


// arrange single event data 
export const arrangeEventsData = (events:any[]) =>{
  const eventsData = events.map(arrangeSingleVentData)

  return eventsData;
  
}
