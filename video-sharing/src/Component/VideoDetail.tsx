import { Paper, Typography } from "@mui/material";
import type { YouTubeVideoObj } from "../App";

type VideoDetailProps = {
  video: YouTubeVideoObj | null;
};

function VideoDetail({ video }: VideoDetailProps) {
  if (!video) return null;

  return (
    <>
      <Paper elevation={6} sx={{ width: "100%", height: 400 }}>
        <iframe
          src={video.videoUrl}
          width="100%"
          height="100%"
          title="YouTube Video Player"
          frameBorder={0}
          allowFullScreen
        />
      </Paper>
      <Paper elevation={6} sx={{ padding: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {video.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {video.description}
        </Typography>
      </Paper>
    </>


  );
}

export default VideoDetail;
