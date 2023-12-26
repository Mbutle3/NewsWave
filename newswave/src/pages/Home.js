import React from "react";
import { Container, Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArticleCard from "../components/ArticleCard";
import NewsService from "../services/NewsService";

const Home = ({ columns = 3, itemsPerColumn = 8 }) => {
  // Assuming you have an array of articles
  const articles = [
    {
      id: 1,
      title: "Article 1",
      description: "Description 1",
      urlToImage: "image1.jpg",
    },
    {
      id: 2,
      title: "Article 2",
      description: "Description 2",
      urlToImage: "image2.jpg",
    },
    // ... other articles
  ];

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
              {articles.slice(0, totalItems).map((article) => (
                <Grid2
                  key={article.id}
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
};

export default Home;
