import React from "react";
import { Container, Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Article from "../components/Article";

const Categories = ({ columns = 3, itemsPerColumn = 8 }) => {
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
              {[...Array(totalItems).keys()].map((item) => (
                <Grid2
                  key={item}
                  item
                  xs={12 / columns}
                  sm={12 / columns}
                  md={12 / columns}
                >
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

export default Categories;
