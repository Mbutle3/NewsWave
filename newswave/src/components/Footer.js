import React from "react";
import { Box, styled } from "@mui/system";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useLocation } from "react-router-dom";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme, selected }) => ({
    color: selected ? "#7ED956" : "grey",
    "& .MuiBottomNavigationAction-label": {
      color: selected ? "#7ED956" : "grey",
    },
  })
);

const Footer = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(-1);

  const handleIconClick = (newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    // Reset the selected state when the location changes (page navigation)
    setValue(-1);
  }, [location.pathname]);

  return (
    <Box style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleIconClick(newValue);
        }}
        showLabels
        style={{ justifyContent: "center" }}
      >
        <StyledBottomNavigationAction
          label="Favorites"
          selected={value === -1}
        />
        <StyledBottomNavigationAction label="Support" selected={value === 0} />
        <StyledBottomNavigationAction
          label="Unsubscribe"
          selected={value === 2}
        />
        <StyledBottomNavigationAction label="Account" selected={value === 3} />
        <StyledBottomNavigationAction
          label="Accessibility"
          selected={value === 4}
        />
        <StyledBottomNavigationAction
          label="Apply Here"
          selected={value === 5}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
