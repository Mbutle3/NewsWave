import React, { useEffect, useState } from "react";
import { Container, Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArticleCard from "../components/ArticleCard";

function Local({ columns = 3, itemsPerColumn = 8 }) {
  const [newsData, setNewsData] = useState([]);
  const totalItems = columns * itemsPerColumn;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform your data fetching here
        const response = await fetchNewsData("bbc-news,the-verge");
        setNewsData(response.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, [columns, itemsPerColumn]);

  // Replace this function with your actual data fetching logic
  const fetchNewsData = async (sources) => {
    // Implement your data fetching logic here
    const apiKey = "8c7fc3d767634a56ae05209f95528db8"; // Add your API key
    const url = `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching news data: ${error.message}`);
    }
  };

  return (
    <Container style={{ marginTop: "3em", marginBottom: "3em" }}>
      <Box height="100vh" overflowY="auto">
        <Paper
          style={{ backgroundColor: "#ffffff", margin: "16px", zIndex: 1 }}
          elevation={10}
        >
          <Box>
            {newsData &&
              newsData.slice(0, totalItems).map((article) => (
                <Grid2
                  key={article.title}
                  item
                  xs={12 / columns}
                  sm={12 / columns}
                  md={12 / columns}
                >
                  <ArticleCard article={article} />
                </Grid2>
              ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Local;
