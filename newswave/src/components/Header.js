import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NewsWaveIcon from "../assets/newswaveicon.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = React.useState(0);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#EFEFEF" }}>
      <Toolbar disableGutters>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#000",
          }}
        >
          <img
            src={NewsWaveIcon}
            alt="NewsWave Logo"
            style={{ width: "60px", height: "40px", marginRight: "8px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#000",
              textDecoration: "none",
            }}
          >
            NewsWave
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            sx={{
              my: 2,
              color: value === 0 ? "#7ED956" : "#000",
            }}
            component={Link}
            to="/"
            onClick={() => setValue(0)}
          >
            Home
          </Button>
          <Button
            sx={{
              my: 2,
              color: value === 3 ? "#7ED956" : "#000",
            }}
            component={Link}
            to="/latest-news"
            onClick={() => setValue(3)}
          >
            Latest News
          </Button>
          <Button
            sx={{
              my: 2,
              color: value === 2 ? "#7ED956" : "#000",
            }}
            component={Link}
            to="/local"
            onClick={() => setValue(2)}
          >
            Local
          </Button>
          <Button
            sx={{
              my: 2,
              color: value === 1 ? "#7ED956" : "#000",
            }}
            component={Link}
            to="/categories"
            onClick={() => setValue(1)}
          >
            Categories
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
