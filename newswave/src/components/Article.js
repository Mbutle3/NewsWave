import React from "react";
import { Paper } from "@mui/material";
import { Card, Button, CardActions, CardContent } from "@mui/material";

function clickedCard() {
  alert("You Clicked A Card!");
}

function clickedMoreInfo(event) {
  event.stopPropagation(); // Prevents the click event from reaching the Card
  alert("You Clicked For More Info!");
}

const Article = () => {
  return (
    <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
      <Card onClick={clickedCard}>
        <CardContent>Card</CardContent>
        <CardActions>
          <CardContent>
            <Button onClick={clickedMoreInfo}>Click For More</Button>
          </CardContent>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default Article;
