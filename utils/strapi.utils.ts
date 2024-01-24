import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchDataFormStrapi(route: string) {
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
      image: {
        url: BASE_URL + image?.url,
        hash: image?.hash,
      },
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
      featuredImage: {
        url: BASE_URL + image?.url,
        hash: image?.hash,
      },
    };
  });

  return arrangeData;
}
