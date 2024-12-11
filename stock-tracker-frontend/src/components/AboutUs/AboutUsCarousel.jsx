import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import './AboutUsCarousel.css';  // Make sure you import your CSS styles

// Custom content for each slide in the carousel
const slides = [
  {
    title: "Our Mission",
    description: "We are dedicated to providing excellent services and building meaningful relationships with our clients.",
  },
  {
    title: "Our Vision",
    description: "To be the leading provider of innovative solutions that drive success for businesses around the world.",
  },
  {
    title: "Our Values",
    description: "Integrity, Innovation, and Excellence are at the core of everything we do. We prioritize quality in every project.",
  },
  {
    title: "Our Team",
    description: "A diverse and passionate group of professionals working together to deliver the best results for our clients.",
  },
];

export default function AboutUsCarousel() {
  const settings = {
    dots: true,               // Show dots at the bottom
    infinite: true,           // Infinite loop
    speed: 500,               // Speed of transition
    slidesToShow: 1,          // Show one slide at a time
    slidesToScroll: 1,        // Scroll one slide at a time
    autoplay: true,           // Auto play the carousel
    autoplaySpeed: 3000,      // Speed of autoplay (3 seconds)
    arrows: true,             // Show arrows to navigate
  };

  return (
    <Box sx={{ width: '100%', padding: 4 }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <Box sx={{ textAlign: 'center', padding: 4 }}>
              <Typography variant="h4" gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="body1">{slide.description}</Typography>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
}
