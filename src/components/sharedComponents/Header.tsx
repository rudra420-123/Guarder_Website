import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import HeroSection from "../../assets/hero-bg.jpg";

interface HeaderProps {
  container?: Element;
}

const navItems = ["Home", "About", "Service", "Guard", "Contact"];
const drawerWidth = 240;

function Header({ container }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GUARDER
      </Typography>
      {navItems.map((item) => (
        <Button
          key={item}
          sx={{ color: "#000", display: "block", width: "100%" }}
        >
          <Link
            to={`/${item.toLowerCase()}`}
            style={{ textDecoration: "none", color: "inherit", width: "100%" }}
          >
            {item}
          </Link>
        </Button>
      ))}
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AppBar position="static" component="nav">
          {/* Top Toolbar with Contact Details */}
          <Toolbar sx={{ display: "flex", bgcolor: "black", py: 1 }}>
            {/* Location Section */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 0,
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              <LocationOnIcon
                sx={{ color: "yellow", fontSize: "1.3rem", marginRight: 1 }}
              />
              Lorem ipsum dolor sit amet
            </Typography>

            {/* Center Section */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              <LocalPhoneIcon
                sx={{ color: "yellow", fontSize: "1.3rem", marginRight: 1 }}
              />
              Call: +01 1234567890
            </Typography>

            {/* Email Section */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 0,
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              <MarkunreadIcon
                sx={{ color: "yellow", fontSize: "1.3rem", marginRight: 1 }}
              />
              demo@gmail.com
            </Typography>
          </Toolbar>

          {/* Main Navigation Toolbar with Hero Background */}
          <Toolbar
            sx={{
              backgroundImage: `url(${HeroSection})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              minHeight: "100px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "relative",
            }}
          >
            {/* Overlay to darken the image */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 1,
              }}
            />

            {/* Menu Button for Mobile */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, zIndex: 2 }}
            >
              <MenuIcon />
            </IconButton>

            {/* Hero Title (Guarder) */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontSize: "1.8rem",
                fontWeight: "750",
                color: "white",
                zIndex: 2,
              }}
            >
              Guarder
            </Typography>

            {/* Navigation Links for Desktop */}
            <Box sx={{ display: { xs: "none", sm: "block" }, zIndex: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    py: 2.5,
                    "&:hover": {
                      bgcolor: "black",
                      borderRadius: "0px",
                    },
                  }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer for Mobile View */}
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}

export default Header;
