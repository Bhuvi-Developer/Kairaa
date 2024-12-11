import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from "@mui/material";
import AboutUsCarousel from "../components/AboutUs/AboutUsCarousel";
import OurCompany from "../components/Swiper.jsx/OurCompany";

const team = [
  { name: "Jane Doe", role: "CEO", img: "/static/images/avatar/1.jpg" },
  { name: "John Smith", role: "CTO", img: "/static/images/avatar/2.jpg" },
  { name: "Mary Johnson", role: "CFO", img: "/static/images/avatar/3.jpg" },
];

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      
      <Typography variant="h3" gutterBottom align="center">
        About Us
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Our mission is to empower individuals to make smarter financial decisions.
      </Typography>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>Our Journey</Typography>
        <div>
          <AboutUsCarousel />
        </div>
        <Typography paragraph>
          Founded in 2020, Stock Tracker started as a simple tool for tracking stocks.
          Today, we provide comprehensive insights and analytics for investors globally.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>Meet the Team</Typography>
        <Grid container spacing={3}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Avatar alt={member.name} src={member.img} sx={{ width: 80, height: 80, margin: "auto" }} />
                  <Typography variant="h6" gutterBottom align="center">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" align="center">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <div>
        <OurCompany />
      </div>
    </Container>
  );
};

export default AboutPage;
