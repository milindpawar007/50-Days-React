import axios from "axios";

const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 5000,
});

export default youtubeApi;

// REACT_APP_API_URL = "AIzaSyCcvWJzYMxSZPTtGCTU1j0Nx05C8OWiasU";
const API_KEY = "AIzaSyCcvWJzYMxSZPTtGCTU1j0Nx05C8OWiasU";

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
