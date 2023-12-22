import React from "react";
import { styled } from "@mui/system";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import WorkIcon from "@mui/icons-material/Work";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme, selected }) => ({
    color: selected ? "#7ed956" : "grey",
  })
);

function Footer() {
  const [value, setValue] = React.useState(0);

  const handleIconClick = (newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleIconClick(newValue);
        }}
        showLabels
        style={{ justifyContent: "flex-start" }}
      >
        <StyledBottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          selected={value === 0}
        />
        <StyledBottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          selected={value === 1}
        />
        <StyledBottomNavigationAction
          label="Support"
          icon={<HelpCenterIcon />}
          selected={value === 2}
        />
        <StyledBottomNavigationAction
          label="Local"
          icon={<LocationOnIcon />}
          selected={value === 3}
        />
        <StyledBottomNavigationAction
          label="Unsubscribe"
          icon={<UnsubscribeIcon />}
          selected={value === 4}
        />
        <StyledBottomNavigationAction
          label="Account"
          icon={<AccountBoxIcon />}
          selected={value === 5}
        />
        <StyledBottomNavigationAction
          label="Accessibility"
          icon={<AccessibilityIcon />}
          selected={value === 6}
        />
        <StyledBottomNavigationAction
          label="Apply Here"
          icon={<WorkIcon />}
          selected={value === 7}
        />
      </BottomNavigation>
    </div>
  );
}

export default Footer;
