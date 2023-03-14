import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../componants/Details";
import ExcersiceVideos from "../componants/ExcersiceVideos";
import { Box } from "@mui/system";
import { fetchData, options, youtubeOption } from "../utils/FetchData";

export default function ExcersiceDetails() {
  const [excersiceDetails, setExcersiceDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const FetchexcersiceDetails = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        options
      );
      setExcersiceDetails(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOption
      );
      setExerciseVideos(exerciseVideosData.contents);
    };
    FetchexcersiceDetails();
  }, [id]);
  return (
    <Box>
      <Details excersiceDetails={excersiceDetails} />
      <ExcersiceVideos
        exerciseVideos={exerciseVideos}
        name={excersiceDetails.name}
      />
    </Box>
  );
}
