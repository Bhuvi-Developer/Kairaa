import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './ContactPage.css'

const CareersPage = () => {
  const jobs = [
    { title: "Frontend Developer", location: "Remote", type: "Full-time" },
    { title: "Backend Developer", location: "New York, NY", type: "Part-time" },
    { title: "UI/UX Designer", location: "San Francisco, CA", type: "Contract" },
  ];

  const faqs = [
    { question: "How can I apply?", answer: "Click on the job title and follow the application process." },
    { question: "Are remote positions available?", answer: "Yes, we offer remote opportunities for certain roles." },
    { question: "What is the hiring process?", answer: "Our process involves initial screening, technical tests, and interviews." },
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Join Our Team
      </Typography>
      <Typography variant="body1" paragraph align="center">
        We're always looking for talented individuals to grow with us. Explore our open roles and make your impact!
      </Typography>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>Job Openings</Typography>
        <Grid container spacing={3}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>{job.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{job.location}</Typography>
                  <Typography variant="body2" color="textSecondary">{job.type}</Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>Apply Now</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>FAQ</Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default CareersPage;
