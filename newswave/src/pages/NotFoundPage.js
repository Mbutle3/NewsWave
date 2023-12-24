import React from "react";
import { Box, Container } from "@mui/system";
import { Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Article from "../components/Article";
const NotFoundPage = () => {
  return (
    <Container style={{ marginTop: "3em" }}>
      <Box>
        <Paper elevation={5}>
          <Grid2
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid2 item xs={12} sx={{ width: "100%", height: "100px" }}>
              <Paper elevation={3}>
                <Article />
              </Paper>
            </Grid2>
            <Grid2 item xs={12} sx={{ width: "100%", height: "100px" }}>
              <Paper elevation={3}>
                <Article />
              </Paper>
            </Grid2>
            <Grid2 item xs={6} sx={{ width: "50%", height: "100px" }}>
              <Paper elevation={3}>
                <Article />
              </Paper>
            </Grid2>
            <Grid2 item xs={6} sx={{ width: "50%", height: "100px" }}>
              <Paper elevation={3}>
                <Article />
              </Paper>
            </Grid2>
            <Grid2 item xs={12} sx={{ width: "100%", height: "100px" }}>
              <Paper elevation={3}>
                <Article />
              </Paper>
            </Grid2>
            <Grid2 item xs={12} sx={{ width: "100%", height: "100px" }}>
              <Paper elevation={3}>
                <Article />
              </Paper>
            </Grid2>
            <Grid2 item xs={6} sx={{ width: "50%", height: "100px" }}>
              <Paper elevation={3}>
                <Article />
              </Paper>
            </Grid2>
            <Grid2 item xs={6} sx={{ width: "50%", height: "100px" }}>
              <Paper elevation={3}>
                <Article />
              </Paper>
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
