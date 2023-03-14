import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, options } from "../utils/FetchData";
import ExerciseCard from "./ExerciseCard";
import Pagination from "@mui/material/Pagination";

const SearchBar = ({ setExcercises, excercises }) => {
  const [search, setSearch] = useState("");
  const [title, settitle] = useState("Some Excersice for you");

  //FOR PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(12);

  useEffect(() => {
    const fetchExcersiceData = async () => {
      const searchedExercises = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );
      setExcercises(searchedExercises);
    };

    fetchExcersiceData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
      setSearch("");
      setExcercises(searchedExercises);
      settitle("Searched Excersice");
    } else {
      console.log("empty");
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );

      const searchedExercises = exercisesData;

      setExcercises(searchedExercises);
    }
  };

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = excercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    // window.scrollTo({ top: 1200, behavior: "smooth" });
  };

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
      style={{ marginTop: "13rem" }}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
          value={search}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
        <Box>
          <Box sx={{ position: "relative", width: "100%", p: "20px" }}></Box>
        </Box>

        <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
          <Typography
            style={{ marginTop: "-93px", marginBottom: "78px" }}
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { lg: "44px", xs: "30px" } }}
            mb="46px"
          >
            {title}
          </Typography>
          <Stack
            direction="row"
            sx={{ gap: { lg: "107px", xs: "50px" } }}
            flexWrap="wrap"
            justifyContent="center"
          >
            {currentExercises.map((excercise, id) => {
              return <ExerciseCard key={id} exercise={excercise} />;
            })}
          </Stack>
          {console.log(excercises)}
        </Box>
      </Box>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {excercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Stack>
  );
};

export default SearchBar;
