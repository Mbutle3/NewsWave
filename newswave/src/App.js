import * as React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Box } from "@mui/system";

function App() {
  return (
    <Box className="App">
      <Header />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
