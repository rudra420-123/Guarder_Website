import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ContactImage from "../assets/contact-bg.jpg";

function Contact() {
  return (
      <Box
        sx={{
          backgroundImage: `url(${ContactImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 4,
          position: "relative",
        }}
      >
        {/* Background Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            width: { xs: "90%", md: "50%" },
            backgroundColor: "transparent",
            borderRadius: "8px",
            padding: "2rem",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              mb: 2,
              position: "relative",
              "&::after": {
                content: '""',
                display: "block",
                width: "40px",
                height: "5px",
                backgroundColor: "#f1db25",
                margin: "8px auto 0 auto",
              },
            }}
          >
            GET IN TOUCH
          </Typography>          

          {/* Form Inputs */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.2rem",
            }}
          >
            <TextField
              label="FULL NAME"
              variant="filled"
              InputProps={{
                style: {
                  color: "black",
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                },
              }}
              fullWidth
            />
            <TextField
              label="EMAIL"
              variant="filled"
              InputProps={{
                style: {
                  color: "black",
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                },
              }}
              fullWidth
            />
            <TextField
              label="PHONE NUMBER"
              variant="filled"
              InputProps={{
                style: {
                  color: "black",
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                },
              }}
              fullWidth
            />
            <TextField
              label="MESSAGE"
              variant="filled"
              InputProps={{
                style: {
                  color: "black",
                  backgroundColor: "#fff",
                  borderRadius: "0px",
                },
              }}
              fullWidth
              multiline
              rows={4}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f1db25",
                borderRadius: "0px",
                color: "white",
                py: 1,
                fontSize: "1.1rem",
                width: "25%",
                mt: 4,
                "&:hover": {
                  backgroundColor: "#fbc02d",
                },
              }}
            >
              SEND
            </Button>
          </Box>
        </Container>
      </Box>
  );
}

export default Contact;
