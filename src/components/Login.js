import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container, 
  Paper,
  Divider,
  Alert
} from '@mui/material';
import { GitHub, Email, Lock } from '@mui/icons-material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
      const data = await res.json();
      if (res.ok) {
        navigate('/dashboard');
      } else {
        setMessage(data.error);
      }
    } catch (err) {
      setMessage('Network error');
    }
  };

  const handleGitHubLogin = () => {
    const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    const scope = 'read:user user:email';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2D2D2D 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 2
    }}>
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            padding: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 4,
            color: 'white'
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography 
              component="h1" 
              variant="h3" 
              sx={{ 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #00D4FF, #0099FF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 1
              }}
            >
              Welcome Back
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Sign in to your CodeGen account
            </Typography>
          </Box>

          {/* Error Message */}
          {message && (
            <Alert severity="error" sx={{ width: '100%', mb: 3, bgcolor: 'rgba(211,47,47,0.1)' }}>
              {message}
            </Alert>
          )}

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: <Email sx={{ color: 'rgba(255,255,255,0.5)', mr: 1 }} />
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                  '&:hover fieldset': { borderColor: '#00D4FF' },
                  '&.Mui-focused fieldset': { borderColor: '#00D4FF' }
                },
                '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#00D4FF' }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: <Lock sx={{ color: 'rgba(255,255,255,0.5)', mr: 1 }} />
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                  '&:hover fieldset': { borderColor: '#00D4FF' },
                  '&.Mui-focused fieldset': { borderColor: '#00D4FF' }
                },
                '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#00D4FF' }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                background: 'linear-gradient(45deg, #00D4FF, #0099FF)',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: 2,
                '&:hover': {
                  background: 'linear-gradient(45deg, #0099FF, #0066FF)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Sign In
            </Button>
          </Box>

          {/* Divider */}
          <Divider sx={{ width: '100%', my: 3, borderColor: 'rgba(255,255,255,0.2)' }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', px: 2 }}>
              OR
            </Typography>
          </Divider>

          {/* GitHub Login */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GitHub />}
            onClick={handleGitHubLogin}
            sx={{
              py: 1.5,
              borderColor: 'rgba(255,255,255,0.3)',
              color: 'white',
              fontSize: '1rem',
              borderRadius: 2,
              '&:hover': {
                borderColor: '#00D4FF',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Sign in with GitHub
          </Button>

          {/* Signup Link */}
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                style={{ 
                  color: '#00D4FF', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}