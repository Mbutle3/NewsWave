import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CategoryIcon from "@mui/icons-material/Category";
import NewsWaveIcon from "../assets/newswaveicon.png";
import { Link } from "react-router-dom";

const categories = ["Politics", "Business", "Technology", "Health", "Science"];

const Header = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

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

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            popup="true"
            onClick={handleToggleDrawer}
            color="#000"
          >
            <CategoryIcon />
          </IconButton>
          <Drawer anchor="top" open={openDrawer} onClose={handleCloseDrawer}>
            {categories.map((category) => (
              <MenuItem
                key={category}
                onClick={handleCloseDrawer}
                component={Link}
                to={`/${category.toLowerCase()}`}
              >
                {category}
              </MenuItem>
            ))}
          </Drawer>
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
              color: value === 1 ? "#7ED956" : "#000",
            }}
            component={Link}
            to="/category"
            onClick={() => setValue(1)}
          >
            Categories
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
              color: value === 3 ? "#7ED956" : "#000",
            }}
            component={Link}
            to="/latest-news"
            onClick={() => setValue(3)}
          >
            Latest News
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
