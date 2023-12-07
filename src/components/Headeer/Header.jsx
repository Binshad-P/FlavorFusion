// mui
import { styled } from "@mui/system";
import React, { useState } from "react";
// mui/icons-material
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
// components
import CustomButton from "../CustomButton/CustomButton.jsx";
import logoImg from "../../assets/logo.png";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenu, SetMobileMenu] = useState({ left: false });
  const navigate=useNavigate()
  const toogleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "tab" || event.type === "shift")
    ) {
      return;
    }
    SetMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toogleDrawer(Drawer, false)}
      onkeyDown={toogleDrawer(anchor, false)}
    >
      <List>
        {nav_titles.map((item, index) => (
          <ListItem key={item.index} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ContactsIcon />}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/dishes",
      display: "Dishes",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/about-us",
      display: "About us",
    },
  ];

  const NavBarLinkBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const NavBarLink = styled(Typography)(() => ({
    fontSize: "14px",
    color: "#4f5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));
  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    height:"50px",
    width:"80px",
    marginLeft:"150px",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),

    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
        maxWidth: "auto",
        backgroundColor: "#FED801",
        marginLeft: "0PX",
        marginBottom: "-24PX",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomMenuIcon onClick={toogleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toogleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>

          <NavBarLogo src={logoImg} />
          {/* <h2 className="NavBarLogo">deo</h2> */}
        </Box>
        <NavBarLinkBox>
          {nav_titles.map((item, index) => (
            <NavBarLink variant="body2" onClick={()=>navigate(item.path)}>
              

            {item.display}</NavBarLink>
          ))}
        </NavBarLinkBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavBarLink variant="body2">signup</NavBarLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          ButtonText="Register"
        />
      </Box>
    </Box>
  );
};

export default Header;
