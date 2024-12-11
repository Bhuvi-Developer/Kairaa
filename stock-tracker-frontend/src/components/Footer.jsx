import React from 'react';
import { Box, Container, Typography, Grid2, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: '40px 0' }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4} justifyContent="space-between">
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Stock Tracker</Typography>
            <Typography variant="body2">Your trusted source for stock tracking and management.</Typography>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Quick Links</Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/careers" style={{ color: 'white', textDecoration: 'none' }}>Careers</Link></li>
              <li><Link to="/aboutus" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Connect With Us</Typography>
            <Typography variant="body2">
              <a href="mailto:support@stocktracker.com" style={{ color: 'white', textDecoration: 'none' }}>
                <EmailIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
                support@infita.com
              </a>
            </Typography>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Social Media</Typography>
            <Box display="flex" gap={2}>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://www.facebook.com" 
                target="_blank"
                sx={{ '&:hover': { color: '#4267B2' } }} // Facebook Hover Effect
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://www.twitter.com" 
                target="_blank"
                sx={{ '&:hover': { color: '#1DA1F2' } }} // Twitter Hover Effect
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://www.linkedin.com/company/kairaa-techserve/?originalSubdomain=in" 
                target="_blank"
                sx={{ '&:hover': { color: '#0077b5' } }} // LinkedIn Hover Effect
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid2>
        </Grid2>
        <Typography variant="body2" align="center" sx={{ marginTop: '20px' }}>
          &copy; {new Date().getFullYear()} Infita | All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
