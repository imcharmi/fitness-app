import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componants/Navbar";
import ExcersiceDetails from "./page/ExcersiceDetails";
import Home from "./page/Home";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="exercise/:id" element={<ExcersiceDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
