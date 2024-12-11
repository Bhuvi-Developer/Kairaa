import React, { useEffect, useRef } from 'react';
import { Box, Grid2, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TradingWidgetView from '../TradingWidgetView';
import './TradeChartPage.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  const tickerTapeRef = useRef();

  useEffect(() => {
    // Check if the TradingView script is already present
    const existingScript = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"]');
    if (!existingScript && tickerTapeRef.current) {
      // Inject the TradingView ticker tape widget script dynamically only if it's not already present
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "in"
      }`;
      tickerTapeRef.current.appendChild(script);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }} className = "chart-page">
      {/* TradingView Ticker Tape */}
      <div ref={tickerTapeRef} className="tradingview-widget-container">
      </div>

      {/* Grid Layout with Grid2 for responsive design */}
      <Grid2 container spacing={3}>
        {/* Left Sidebar */}
        <Grid2 item xs={12} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Item>Left Sidebar</Item>
        </Grid2>

        {/* TradingView Widget */}
        <Grid2 item xs={12} sm={6}>
          <Item>
            <TradingWidgetView />
          </Item>
        </Grid2>

        {/* Right Sidebar */}
        <Grid2 item xs={12} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Item>Right Sidebar</Item>
        </Grid2>
      </Grid2>
    </Box>
  );
}
