import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import MaximizeIcon from "@mui/icons-material/Maximize";
import guard1 from "../assets/t1.jpg";
import guard2 from "../assets/t2.jpg";
import guard3 from "../assets/t3.jpg";

function Guard() {
  return (
      <Box
        sx={{
          color: "black",
          py: { xs: 4, sm: 6 },
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h5" sx={{ fontWeight: "800", py: 1 }}>
            OUR GUARDS
          </Typography>
          <MaximizeIcon
            sx={{ color: "#f1db25", fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: "900" }}
          />
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              textAlign: "center",
              maxWidth: "80vw",
              margin: "0 auto",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a
            euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget
            vitae malesuada, tortor tincidunt porta lorem lectus.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Card Components */}
            {[
              { name: "Martin Anderson", title: "Supervisor", image: guard1 },
              { name: "Denny Butler", title: "Supervisor", image: guard2 },
              { name: "Nathan Mcpherson", title: "Supervisor", image: guard3 },
            ].map((guard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 450, sm: 400, md: 450 },
                    borderRadius: "0px",
                    overflow: "hidden",
                    boxShadow: 3,
                    mt: 5,
                  }}
                >
                  {/* Background Image with Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${guard.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "brightness(60%)",
                    }}
                  />

                  {/* Content with Transparent Effect */}
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      zIndex: 2,
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      width: "100%",
                      borderRadius: "0px",
                      padding: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold", fontSize: { xs: "1rem", md: "1.25rem" } }}
                    >
                      {guard.name}
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
                      {guard.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* View All Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f1db25",
                borderRadius: "0px",
                color: "white",
                px: { xs: 2, md: 4 },
                py: { xs: 1, md: 1.5 },
                fontSize: { xs: "0.85rem", md: "1rem" },
                "&:hover": {
                  backgroundColor: "#fbc02d",
                },
              }}
            >
              View All
            </Button>
          </Box>
        </Container>
      </Box>
  );
}

export default Guard;
