import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Exercisede from "./pages/Exercisede";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <Box width="400px" sx={{ width: {xl:"1488px"} }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<Exercisede />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
