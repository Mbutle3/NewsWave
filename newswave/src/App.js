import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";

// Visual Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ArticleDetail from "./pages/ArticleDetail";
import NotFoundPage from "./pages/NotFoundPage";
import Local from "./pages/Local";
import LatestNews from "./pages/LatestNews";

const App = () => {
  return (
    <Router>
      <Header />
      <Box className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article-detail" element={<ArticleDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/local" element={<Local />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
