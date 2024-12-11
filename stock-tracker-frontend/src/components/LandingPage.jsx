import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from './Img/p1.jpg';
import p2 from './Img/p2.jpg';
import p3 from './Img/p3.jpg';
import './LandingPage.css';
import TradingViewWidget from "./TradeWidgets/TradeWidgetview2";

const coinData = {
  gainers: [
    {
      id: "1",
      name: "Bitcoin",
      symbol: "BTC",
      price: "$43,000",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025",
    },
    {
      id: "2",
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,200",
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
    },
    {
      id: "3",
      name: "Tether",
      symbol: "USDT",
      price: "$1.00",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=025",
    },
  ],
  losers: [
    {
      id: "4",
      name: "Shiba Inu",
      symbol: "SHIB",
      price: "$0.00001",
      image: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=025",
    },
    {
      id: "5",
      name: "Solana",
      symbol: "SOL",
      price: "$120",
      image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025",
    },
    {
      id: "6",
      name: "Cardano",
      symbol: "ADA",
      price: "$1.12",
      image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=025",
    },
  ],
};

// Add stock market-themed banner images
const bannerImages = [
  p1,
  p2,
  p3,
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderCoins = (coins) => (
    <Grid container spacing={4} justifyContent="center">
      {coins.map((coin) => (
        <Grid item xs={12} sm={6} md={4} key={coin.id}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="140"
              image={coin.image}
              alt={coin.name}
              sx={{ objectFit: "contain", padding: 2 }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {coin.name} ({coin.symbol})
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {coin.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Carousel moves every 2 seconds
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // Tablet
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="container-fluid">
    <Box sx={{ marginTop: "10px" }}>
        {/* Banner Section */}
        <Slider {...settings}>
          {bannerImages.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Banner ${index + 1}`}
              sx={{
                width: "100%",
                height: "330px", // Set the height to 100% of the viewport height
                objectFit: "cover", // Ensure the image covers the container fully
              }}
            />
          ))}
        </Slider>

        <Box sx={{ padding: "20px", marginTop: "10px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
            Cryptocurrency Market Overview
          </Typography>

          {/* Tabs Section */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="Market Tabs"
            sx={{ mb: 4 }}
          >
            <Tab label="Top Gainers" />
            <Tab label="Top Losers" />
          </Tabs>

          {/* Conditional Rendering Based on Tab */}
          {activeTab === 0 && renderCoins(coinData.gainers)}
          {activeTab === 1 && renderCoins(coinData.losers)}
        </Box>
      </Box>
      <div className="TradingView2">
        <TradingViewWidget />
      </div>

    </div>
      
    </>
  );
};

export default Home;
