import React, { useEffect, useState } from "react";
import { Container, Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArticleCard from "../components/ArticleCard";
import NewsService from "../services/NewsService";

function Home({ columns = 3, itemsPerColumn = 8 }) {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await NewsService({
          sources: "bbc-news,the-verge",
          // Add other parameters as needed
        });
        setNewsData(response.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);
  const totalItems = columns * itemsPerColumn;

  return (
    <Container style={{ marginTop: "3em", marginBottom: "3em" }}>
      <Box height="100vh" overflowY="auto">
        <Paper
          style={{ backgroundColor: "#ffffff", margin: "16px", zIndex: 1 }}
          elevation={10}
        >
          <Box>
            <Grid2
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {newsData.slice(0, totalItems).map((article) => (
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
            </Grid2>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Home;
