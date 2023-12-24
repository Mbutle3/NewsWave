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

const App = () => {
  return (
    <Router>
      <Box className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/article-detail" element={<ArticleDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/local" element={<Local />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
