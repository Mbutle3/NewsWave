import React from "react";
import { Box, styled } from "@mui/system";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useLocation, Link } from "react-router-dom";

const navItems = [
  { label: "Favorites", path: "/favorites" },
  { label: "Support", path: "/support" },
  { label: "Unsubscribe", path: "/unsubscribe" },
  { label: "Account", path: "/account" },
  { label: "Accessibility", path: "/accessibility" },
  { label: "Apply Here", path: "/apply" },
];

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme, selected }) => ({
    color: selected ? "grey" : theme.palette.text.primary, // Set to grey when selected, use theme color otherwise
    "& .MuiBottomNavigationAction-label": {
      color: selected ? "grey" : theme.palette.text.primary,
    },
  })
);

const Footer = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(
    navItems.findIndex((item) => item.path === location.pathname)
  );

  const handleIconClick = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        height: "35px",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleIconClick(newValue);
        }}
        showLabels
        style={{ justifyContent: "center" }}
      >
        {navItems.map((item, index) => (
          <StyledBottomNavigationAction
            key={index}
            label={item.label}
            component={Link}
            to={item.path}
            selected={index === value}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
