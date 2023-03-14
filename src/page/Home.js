import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Herobanner from "../componants/Herobanner";
import SearchBar from "../componants/SearchBar";

export default function Home() {
  const [excercises, setExcercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <Herobanner />
      <SearchBar
        excercises={excercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExcercises={setExcercises}
      />
    </Box>
  );
}
