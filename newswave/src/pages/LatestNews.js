import React, { useEffect, useState } from "react";
import { Container, Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArticleCard from "../components/ArticleCard";

function LatestNews({ columns = 3, itemsPerColumn = 8 }) {
  const [newsData, setNewsData] = useState([]);
  const totalItems = columns * itemsPerColumn;

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchNewsData = async () => {
      const apiKey = "8c7fc3d767634a56ae05209f95528db8"; // Add your API key
      const currentDate = getCurrentDate();
      const url = `https://newsapi.org/v2/everything?q=News&from=${currentDate}&to=${currentDate}&sortBy=popularity&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setNewsData(data.articles); // Set the state after parsing the JSON response
      } catch (error) {
        throw new Error(`Error fetching news data: ${error.message}`);
      }
    };

    fetchNewsData();
  }, []);

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

export default LatestNews;
