// App.tsx
import "./App.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";

import Header from "./Component/Header";
import SearchBar from "./Component/SearchBar";
import VideoDetail from "./Component/VideoDetail";
import VideoList from "./Component/VideoList";

import { searchYoutube } from "./service/Youtube";

export type YouTubeVideoObj = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string; // should be https://www.youtube.com/embed/VIDEO_ID
};

function App() {
  const [videoListData, setVideoListData] = useState<YouTubeVideoObj[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideoObj | null>(
    null
  );

  async function handleSearch(searchTerm: string) {
    try {
      const data = await searchYoutube(searchTerm);

      const dataObj: YouTubeVideoObj[] =
        data?.items?.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails?.medium?.url ?? "",
          videoUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
        })) ?? [];

      setVideoListData(dataObj);
      setSelectedVideo(dataObj[0] ?? null);
    } catch (error) {
      setVideoListData([]);
      setSelectedVideo(null);
    }
  }

  return (
    <>
      <Header />

<Grid container spacing={4} sx={{ justifyContent: "center" }}>
  <Grid size={11}>
    <Grid container spacing={4}>
      <Grid size={12}>
        <SearchBar handelSearch={handleSearch} />
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <VideoDetail video={selectedVideo} />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <VideoList videos={videoListData} onSelect={setSelectedVideo} />
      </Grid>
    </Grid>
  </Grid>
</Grid>
    </>
  );
}

export default App;
