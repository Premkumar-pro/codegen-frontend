import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container,
  Grid,
  Alert,
  CircularProgress,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import { Email, Lock, Person, Code, ArrowBack, Work, School } from '@mui/icons-material';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('developer');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/signup/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: fullName, email, password, role }),
        credentials: 'include',
      });
      const data = await res.json();
      if (res.ok) {
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        setMessage(data.error);
        setLoading(false);
      }
    } catch (err) {
      setMessage('Network error');
      setLoading(false);
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2D2D2D 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      
      {/* Back to Home Button */}
      <IconButton 
        onClick={() => navigate('/')}
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          bgcolor: 'rgba(255,255,255,0.1)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
        }}
      >
        <ArrowBack />
      </IconButton>

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          
          {/* Left Side - Signup Form */}
          <Grid item xs={12} md={5}>
            <Box sx={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 4,
              padding: 4,
              color: 'white'
            }}>
              {/* Header */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <Code sx={{ fontSize: 40, color: '#00D4FF', mr: 2 }} />
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #00D4FF, #0099FF)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    Join CodeGen.ai
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: '600', mb: 1 }}>
                  Create Your Account
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Start converting code across 50+ languages
                </Typography>
              </Box>

              {/* Error Message */}
              {message && (
                <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(211,47,47,0.1)' }}>
                  {message}
                </Alert>
              )}

              {/* Signup Form */}
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  InputProps={{
                    startAdornment: <Person sx={{ color: 'rgba(255,255,255,0.5)', mr: 1 }} />
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
                  fullWidth
                  margin="normal"
                  label="Email"
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
                  fullWidth
                  margin="normal"
                  type="password"
                  label="Password"
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
                
                {/* Role Select */}
                <FormControl fullWidth margin="normal">
                  <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>I am a</InputLabel>
                  <Select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    sx={{
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.3)'
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00D4FF'
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00D4FF'
                      }
                    }}
                  >
                    <MenuItem value="developer">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Work sx={{ mr: 1, fontSize: 20 }} />
                        Developer
                      </Box>
                    </MenuItem>
                    <MenuItem value="student">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <School sx={{ mr: 1, fontSize: 20 }} />
                        Student
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    mt: 3,
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
                  {loading ? <CircularProgress size={24} /> : 'Create Account'}
                </Button>
              </Box>

              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    style={{ 
                      color: '#00D4FF', 
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Illustration */}
          <Grid item xs={12} md={5}>
            <Box sx={{ 
              textAlign: 'center',
              color: 'white'
            }}>
              <Code sx={{ fontSize: 120, color: 'rgba(0, 212, 255, 0.3)', mb: 3 }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                Start Your Coding Journey
              </Typography>
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                Join thousands of developers converting code seamlessly
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: '#00D4FF', fontWeight: 'bold' }}>50+</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Languages</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: '#00FF87', fontWeight: 'bold' }}>AI</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Powered</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: '#FF6B6B', fontWeight: 'bold' }}>Fast</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Conversion</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}