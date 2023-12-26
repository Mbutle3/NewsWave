import React from "react";
import { Container, Box, Typography, ListItem } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

const Categories = () => {
  return (
    <Container style={{ marginTop: "3em", marginBottom: "3em" }}>
      <Box>
        <Typography variant="h5">List Of Categories</Typography>
      </Box>
      <Box>
        <List>
          <ListItem>
            <ListItemText primary="Item 1"></ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem>
            <ListItemText primary="Item 2"></ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem>
            <ListItemText primary="Item 3"></ListItemText>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Categories;
