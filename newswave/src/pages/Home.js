// Home.js
import React from "react";
import { Box, Container } from "@mui/system";
import { Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Article from "../components/Article";

const Home = () => {
  return (
    <Container style={{ marginTop: "3em" }}>
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
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Grid2 key={item} item xs={12} sm={6} md={3}>
                  <Article />
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
