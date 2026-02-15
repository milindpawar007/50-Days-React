import type { YouTubeVideoObj } from "../App";
import { Paper, Typography, Box } from "@mui/material";

type VideoListProps = {
  videos: YouTubeVideoObj[];
  onSelect: (video: YouTubeVideoObj) => void;
};

function VideoList({ videos, onSelect }: VideoListProps) {
  return (
    <Box>
      {videos.map((video) => (
        <Paper
          key={video.id}
          onClick={() => onSelect(video)}
          sx={{
            display: "flex",
            gap: 1.5,
            padding: 1,
            marginBottom: 1,
            cursor: "pointer",
            alignItems: "flex-start",
            "&:hover": { backgroundColor: "action.hover" },
          }}
        >
          {/* Thumbnail */}
          <Box
            component="img"
            src={video.thumbnailUrl}
            alt={video.title}
            sx={{
              width: 120,
              height: 90,
              objectFit: "cover",
              borderRadius: 1,
              flexShrink: 0,
            }}
          />

          {/* Text */}
          <Box sx={{ overflow: "hidden" }}>
            <Typography variant="subtitle2" >
              {video.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {video.description}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}

export default VideoList;
