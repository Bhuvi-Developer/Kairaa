import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
} from "@mui/material";
import emailjs from "emailjs-com";
import "./ContactPage.css"; // Import the CSS file
import OurCompany from "../components/Swiper.jsx/OurCompany"; // Fixed import case

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
      emailjs
        .send(
          "YOUR_SERVICE_ID", // Replace with your actual service ID
          "YOUR_TEMPLATE_ID", // Replace with your actual template ID
          {
            from_name: name,
            from_email: email,
            message: message,
          },
          "YOUR_USER_ID" // Replace with your actual user ID
        )
        .then(
          (response) => {
            setSnackbarMessage("Message sent successfully!");
            setOpenSnackbar(true);
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            setSnackbarMessage("Failed to send message. Please try again.");
            setOpenSnackbar(true);
          }
        );
    } else {
      setSnackbarMessage("Please fill in all the fields.");
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph align="center">
        We’d love to hear from you. Get in touch with us via the form below or
        visit us at one of our locations.
      </Typography>

      <Box my={4}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 4 }} elevation={3}>
              <Typography variant="h5" gutterBottom>
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  margin="normal"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glowing-input"
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  margin="normal"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glowing-input"
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glowing-input"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  className="glowing-button"
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Office Locations */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" gutterBottom>
                Our Offices
              </Typography>
              
              <Typography>Kairaa Tech Serve Pvt Ltd</Typography>
              <Typography>Madurai, Tamil Nadu, India</Typography>
            </Box>
            <Box my={4}>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3345858377115!2d78.15721779999999!3d9.948996199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c57026ac87a7%3A0xb0568da427fa468a!2sKairaa%20Tech%20serve%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1694467866933!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Snackbar for success/failure messages */}
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        autoHideDuration={4000}
      />
    </Container>
  );
};

export default ContactPage;
