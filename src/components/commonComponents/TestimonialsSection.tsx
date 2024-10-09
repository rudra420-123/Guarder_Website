import React, { useState } from "react";
import { Box, Typography, Avatar, Button, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import client from "../../assets/client.png";

// Define the interface for the testimonial
interface Testimonial {
  name: string;
  image: string;
  text: string;
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    name: "Minim Veniam",
    image: client,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Client Two",
    image: "https://i.pravatar.cc/150?img=5",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    name: "Client Three",
    image: "https://i.pravatar.cc/150?img=6",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Navigate to the previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        py: { xs: 4, md: 6 ,sm: 8},
        backgroundColor: "#fafafa",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 1,
          fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.9rem" },
        }}
      >
        WHAT IT SAYS OUR CLIENTS
      </Typography>

      {/* Highlight under the title */}
      <Box
        sx={{
          width: { xs: "30px", sm: "35px", md: "40px" },
          height: { xs: "4px", md: "5px" },
          backgroundColor: "#f1db25",
          mb: 5,
        }}
      />

      {/* Client Testimonial */}
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* Left Arrow */}
        <Grid item xs={2} sm={1} display="flex" justifyContent="center">
          <Button onClick={handlePrev} sx={{ minWidth: "auto" }}>
            <ArrowBackIosNewIcon
              sx={{
                fontSize: { xs: "1.7rem", sm: "1.8rem", md: "2rem" },
                color: "white",
                borderRadius: "50%",
                bgcolor: "black",
                p: 1,
              }}
            />
          </Button>
        </Grid>

        {/* Client Details */}
        <Grid item xs={8} sm={6} md={5}>
          <Box sx={{ maxWidth: "100%", textAlign: "center" }}>
            <Avatar
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              sx={{
                width: { xs: 80, sm: 100, md: 120 },
                height: { xs: 80, sm: 100, md: 120 },
                mx: "auto",
                mb: 3,
                borderRadius: "0%",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
              }}
            >
              {testimonials[currentIndex].name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                mt: 2,
                fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              {testimonials[currentIndex].text}
            </Typography>
          </Box>
        </Grid>

        {/* Right Arrow */}
        <Grid item xs={2} sm={1} display="flex" justifyContent="center">
          <Button onClick={handleNext} sx={{ minWidth: "auto" }}>
            <ArrowForwardIosIcon
              sx={{
                fontSize: { xs: "1.7rem", sm: "1.8rem", md: "2rem" },
                color: "white",
                borderRadius: "50%",
                bgcolor: "black",
                p: 1,
              }}
            />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
