import React from "react";
import { Card, Button, Paper, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

function clickedCard() {
  alert("You Clicked A Card!");
}

function clickedMoreInfo(event) {
  event.stopPropagation();
  alert("You Clicked For More Info!");
}

const ArticleCard = ({ article }) => {
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
            src={article.urlToImage}
            style={{
              maxHeight: "150px",
              maxWidth: "300px",
            }}
            alt="Article"
          />
          <Typography variant="h4" textAlign="center" fontSize={16}>
            {article.title}
          </Typography>
          <hr style={{ width: "50%" }} />
          <Typography variant="body1" textAlign="flex-start" fontSize={12}>
            {article.description}
          </Typography>
          <hr style={{ width: "50%" }} />
          <Box sx={{ marginTop: "auto", textAlign: "center" }}>
            <Button onClick={clickedMoreInfo}>
              <Typography variant="caption">Click To View Article</Typography>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ArticleCard;
