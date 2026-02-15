import axios from "axios";

const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 5000,
});

export default youtubeApi;

const API_KEY = import.meta.env.VITE_YT_API_KEY;

export async function searchYoutube(searchTerm: string, maxResults = 5) {
  const { data } = await youtubeApi.get("/search", {
    params: {
      part: "snippet",
      type: "video",
      maxResults,
      q: searchTerm,
      key: API_KEY,
    },
  });

  return data; // contains items[]
}
