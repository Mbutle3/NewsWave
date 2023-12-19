import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import CategoryIcon from "@mui/icons-material/Category";
import NewsWaveIcon from "../assets/newswaveicon.png";

const categories = ["Politics", "Business", "Technology", "Health", "Science"];

function Header() {
  const [openNavMenuAnchor, setOpenNavMenuAnchor] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setOpenNavMenuAnchor(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setOpenNavMenuAnchor(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#EFEFEF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
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
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#000",
              }}
            >
              NewsWave
            </Typography>
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              popup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={openNavMenuAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(openNavMenuAnchor)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{category}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Main Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "#000", display: "block" }}>
              Home
            </Button>
            <Button sx={{ my: 2, color: "#000", display: "block" }}>
              Categories
            </Button>
            <Button sx={{ my: 2, color: "#000", display: "block" }}>
              Latest News
            </Button>
          </Box>

          {/* Search and Categories Icons */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Search">
              <IconButton sx={{ p: 0 }} color="inherit">
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Categories">
              <IconButton sx={{ p: 0 }} color="inherit">
                <CategoryIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
