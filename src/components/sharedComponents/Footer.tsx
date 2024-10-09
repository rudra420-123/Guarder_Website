import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <Box
    sx={{
      bgcolor: 'black',
      color: 'white',
      py:4,
      px: { xs: 2, sm: 4 },
      textAlign: 'center',
    }}
    >
      <Container>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            Guarder
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 , textAlign: 'left'}}>
            dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam,
            quisdotempor incididunt r
          </Typography>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' , textAlign: 'left'}}>
            Useful Link
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 , textAlign: 'left'}}>
            dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam,
            quisdotempor incididunt r
          </Typography>
        </Grid>

        {/* Right Section - Contact Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' , textAlign: 'left'}}>
            Contact Us
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, color: 'white' }} />
              <Typography variant="body1">
                Lorem ipsum dolor sit amet,
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocalPhoneIcon sx={{ mr: 1, color: 'white' }} />
              <Typography variant="body1">
                Call: +01 1234567890
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <MarkunreadIcon sx={{ mr: 1, color: 'white' }} />
              <Typography variant="body1">
                demo@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
              <FacebookIcon sx={{ mr: 1, color: 'white' }} />
              <TwitterIcon sx={{ mr: 1, color: 'white' }} />
              <YouTubeIcon sx={{ mr: 1, color: 'white' }} />
              <InstagramIcon sx={{ mr: 1, color: 'white' }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Typography
        variant="body1"
        sx={{ mt: 10, color: 'grey.500', textAlign: 'center' }}
      >
        © 2024 All Rights Reserved. Design by Free HTML Templates
      </Typography>
    </Container>
    </Box>
  );
};

export default Footer;
