import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "3em",
        padding: "2em",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h3" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: "#7ED956", color: "#ffffff" }}
        component={Link}
        to="/"
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
