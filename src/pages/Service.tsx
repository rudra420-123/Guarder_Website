import React from "react";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import MaximizeIcon from "@mui/icons-material/Maximize";
import HomeSecurity from "../assets/s1.svg";
import OfficeSecurity from "../assets/s2.svg";
import Bodygaurd from "../assets/s3.svg";
function Service() {
  return (
      <Box
        sx={{
          bgcolor: "#1c1c1c",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h5"
            sx={{ fontWeight: "800", marginTop: "25px" }}
          >
            OUR SERVICES
          </Typography>
          <MaximizeIcon
            sx={{ color: "#f1db25", fontSize: "3.5rem", fontWeight: "900" }}
          />
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
            {/* Home Security Card */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  color: "black",
                  borderRadius: "0px",
                  padding: "2rem",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Box
                  component="img"
                  src={HomeSecurity}
                  alt="Home Security"
                  width={70}
                  height={70}
                  sx={{ mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  HOME SECURITY
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, textAlign: "center" }}>
                  Minima consequatur architecto eaque assumenda ipsam itaque
                  quia eum in doloribus debitis impedit ut minus tenetur
                  corrupti excepturi ullam.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#f1db25",
                    borderRadius: "0px",
                    color: "white",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>

            {/* Office Security Card */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  color: "black",
                  borderRadius: "0px",
                  padding: "2rem",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Box
                  component="img"
                  src={OfficeSecurity}
                  alt="Office Security"
                  width={70}
                  height={70}
                  sx={{ mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  OFFICE SECURITY
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, textAlign: "center" }}>
                  Minima consequatur architecto eaque assumenda ipsam itaque
                  quia eum in doloribus debitis impedit ut minus tenetur
                  corrupti excepturi ullam.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#f1db25",
                    borderRadius: "0px",
                    color: "white",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>

            {/* Bodyguard Card */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  color: "black",
                  borderRadius: "0px",
                  padding: "2rem",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Box
                  component="img"
                  src={Bodygaurd}
                  alt="Bodygaurd"
                  width={70}
                  height={70}
                  sx={{ mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  BODYGUARD
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, textAlign: "center" }}>
                  Minima consequatur architecto eaque assumenda ipsam itaque
                  quia eum in doloribus debitis impedit ut minus tenetur
                  corrupti excepturi ullam.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#f1db25",
                    borderRadius: "0px",
                    color: "white",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
}

export default Service;