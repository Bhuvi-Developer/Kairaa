import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openState) => {
    setOpen(openState);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Careers', path: '/careers' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact', path: '/contact' },
    { name: 'TradeView', path: '/tradechart' },
    { name: 'Login', path: '/login' },
    { name: 'Signup', path: '/register' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1a1a1a', padding: '0 10px' }}>
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          {/* Brand Name */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '24px' }}>
              Stock Tracker
            </Link>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: '#fff',
                  fontSize: '16px',
                  margin: '0 10px',
                  textTransform: 'none',
                  '&:hover': { color: '#6a59ff' }, // Highlight on hover
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: '10px' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.name}
                component={Link}
                to={item.path}
                onClick={() => toggleDrawer(false)}
                sx={{
                  textAlign: 'center',
                  '&:hover': { backgroundColor: '#f4f4f4', color: '#6a59ff' },
                }}
              >
                <ListItemText primary={item.name} sx={{ color: '#333' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
