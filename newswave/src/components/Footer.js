import React from "react";
import { Box, styled } from "@mui/system";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme, selected }) => ({
    color: selected ? "#7ED956" : "grey",
  })
);

const Footer = () => {
  const [value, setValue] = React.useState(0);

  const handleIconClick = (newValue) => {
    setValue(newValue);
  };

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
          selected={value === 0}
        />
        <StyledBottomNavigationAction label="Support" selected={value === 1} />

        <StyledBottomNavigationAction
          label="Unsubscribe"
          selected={value === 3}
        />
        <StyledBottomNavigationAction label="Account" selected={value === 4} />
        <StyledBottomNavigationAction
          label="Accessibility"
          selected={value === 5}
        />
        <StyledBottomNavigationAction
          label="Apply Here"
          selected={value === 6}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
