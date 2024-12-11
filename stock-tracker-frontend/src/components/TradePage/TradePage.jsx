import React from "react";
import { Box, Grid2, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TradingViewWidget from "../TradingWidgetView";
import '../TradePage/TradePage.css'


const Sidebar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#2c2c2c" : "#f4f4f4",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
}));

const WidgetContainer = styled(Box)({
  backgroundColor: "#1A2027",
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export default function EnhancedGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, color: "#333", fontWeight: "bold" }}>
        Trading Dashboard
      </Typography>
      <Grid2 container spacing={3}>
        {/* Left Sidebar */}
        <Grid2 item xs={12} sm={3}>
          <Sidebar>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Market News
            </Typography>
            <Typography variant="body2">
              Stay updated with the latest trends in the cryptocurrency market.
            </Typography>
          </Sidebar>
        </Grid2>

        {/* TradingView Widget */}
        <Grid2 item xs={12} sm={6}>
          <WidgetContainer>
            <TradingViewWidget />
          </WidgetContainer>
        </Grid2>

        {/* Right Sidebar */}
        <Grid2 item xs={12} sm={3}>
          <Sidebar>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Portfolio Insights
            </Typography>
            <Typography variant="body2">
              Analyze your portfolio and get real-time insights for better decision-making.
            </Typography>
          </Sidebar>
        </Grid2>
      </Grid2>
    </Box>
  );
}
