import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Visual Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/system";
// Pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import ArticleDetail from "./pages/ArticleDetail";
import NotFoundPage from "./pages/NotFoundPage";
import Local from "./pages/Local";
import LatestNews from "./pages/LatestNews";

function App() {
  return (
    <Router>
      <Box className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ArticleDetail" element={<ArticleDetail />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Local" element={<Local />} />
          <Route path="/Local" element={<LatestNews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
