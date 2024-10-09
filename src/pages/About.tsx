import React from "react";
import { Box, Button, Typography, Grid, Container } from "@mui/material";
import AboutImage from "../assets/about-img.jpg"; 

function About() {
  return (
      <Box
        sx={{
          position: "relative",
          py: 10,
          px: { xs: 2, md: 8 },
          bgcolor: "white",          
        }}
      >
        <Container>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            {/* Left Image Section */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={AboutImage}
                alt="Guarder"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>

            {/* Right Content Section */}
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: { xs: "static", md: "absolute" },
                  top: { md: "50%" },
                  left: { md: "-10%" }, 
                  transform: { md: "translateY(-50%)" },
                  backgroundColor: "white",
                  p: { xs: 2, md: 4 },
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                  maxWidth: { xs: "100%", md: "100%" }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "800", mb: 2, color: "black" }}
                >
                  WHO ARE WE?
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f1db25",
                    borderRadius:"0px",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#fbc02d",
                    },
                  }}
                >
                  READ MORE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
}

export default About;
