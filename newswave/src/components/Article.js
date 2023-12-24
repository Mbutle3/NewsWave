import React from "react";
import {
  Card,
  Button,
  Paper,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

function clickedCard() {
  alert("You Clicked A Card!");
}

function clickedMoreInfo(event) {
  event.stopPropagation(); // Prevents the click event from reaching the Card
  alert("You Clicked For More Info!");
}

const Article = () => {
  return (
    <Paper elevation={3} sx={{ width: "100%", height: "80%" }}>
      <Card onClick={clickedCard}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "center", // Center the content horizontally
            justifyContent: "center", // Center the content vertically
          }}
        >
          <img
            src={"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7"}
            style={{
              maxHeight: "150px",
              maxWidth: "300px",
            }}
            alt="Article"
          />
          <Typography variant="h4" textAlign="center" fontSize={16}>
            Testing Article
          </Typography>
          <hr style={{ width: "50%" }} />
          <Typography variant="body1" textAlign="flex-start" fontSize={12}>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi animcupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident.
          </Typography>
          <hr style={{ width: "50%" }} />
          <Box sx={{ marginTop: "auto", textAlign: "center" }}>
            <Button onClick={clickedMoreInfo}>
              <Typography variant="caption">Click To View</Typography>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Article;
