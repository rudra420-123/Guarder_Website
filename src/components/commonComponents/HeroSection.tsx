import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import heroBg from "../../assets/hero-bg.jpg";

function HeroSection() {
  return (
    <Box
      sx={{
        height: { xs: "60vh", md: "80vh" },
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center", md: "top" },
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        position: "relative",
        color: "#fff",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Left Side: Text content */}
          <Grid item xs={12} md={6} sx={{ position: "relative", zIndex: 2 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              YOUR SAFETY
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#f1db25",
                mb: 4,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              OUR RESPONSIBILITY
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: { xs: "100%", sm: "400px" },
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod magna aliqua. Ut enim ad minim veniam.
            </Typography>
            <Box>
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  bgcolor: "white",
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                  mr: 2,
                  py: "10px",
                  px: "30px",
                  borderRadius: "0px",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "white",
                    border: "1px solid white",
                  },
                }}
              >
                Read more
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#f1db25",
                  color: "white",
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                  py: "10px",
                  px: "30px",
                  borderRadius: "0px",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#f1db25",
                    border: "1px solid #f1db25",
                  },
                }}
              >
                Get A Quote
              </Button>
            </Box>
          </Grid>

          {/* Right Side: This can remain empty or be used for additional content */}
          <Grid item xs={12} md={6} sx={{ position: "relative", zIndex: 2 }} />
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
