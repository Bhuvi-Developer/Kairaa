import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call)
    console.log({ username, email, password });
    navigate('/login');
  };

  return (
    <Container maxWidth="xs" sx={{ padding: '20px', marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Create an Account
      </Typography>
      <form onSubmit={handleSignup}>
        <TextField
          label="Username"
          type="text"
          fullWidth
          required
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
          Signup
        </Button>
      </form>
    </Container>
  );
};

export default SignupPage;
