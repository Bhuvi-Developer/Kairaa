import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import TradingViewWidget from 'react-tradingview-widget';

const MarketPage = () => {
  const stockList = [
    { name: 'AAPL', symbol: 'NASDAQ:AAPL' },
    { name: 'GOOGL', symbol: 'NASDAQ:GOOGL' },
    { name: 'TSLA', symbol: 'NASDAQ:TSLA' },
    { name: 'AMZN', symbol: 'NASDAQ:AMZN' },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      {/* Header */}
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
        Stock Market Overview
      </Typography>

      {/* TradingView Widget */}
      <Box sx={{ marginBottom: '40px', boxShadow: 3 }}>
        <TradingViewWidget
          symbol="NASDAQ:AAPL"
          theme="light"
          autosize
          style="1"
        />
      </Box>

      {/* Stock List */}
      <Grid container spacing={4}>
        {stockList.map((stock) => (
          <Grid item xs={12} sm={6} md={3} key={stock.symbol}>
            <Card
              sx={{
                borderRadius: '12px',
                boxShadow: 3,
                textAlign: 'center',
                backgroundColor: '#fff',
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {stock.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '12px' }}>
                  {stock.symbol}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.open(`https://www.tradingview.com/symbols/${stock.symbol}`, '_blank')}
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  View on TradingView
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MarketPage;
