import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExcersiceVideos = ({ exerciseVideos, name }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "80px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>

      <Button
        className="search-btn"
        sx={{
          bgcolor: "#FF2625",
          color: "#fff",
          textTransform: "none",
          width: { lg: "173px", xs: "80px" },
          height: "50px",
          position: "absolute",
          right: "50%",
          fontSize: { lg: "20px", xs: "14px" },
        }}
        onClick={() => navigate("/")}
      >
        Go To Home
      </Button>
      <br />
    </Box>
  );
};

export default ExcersiceVideos;
