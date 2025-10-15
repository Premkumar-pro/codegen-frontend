import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Button,
//   Paper
} from '@mui/material';
import { 
  Code, 
  Storage, 
//   DataObject,
  ArrowForward,
  Web,
  Terminal
} from '@mui/icons-material';

export default function LanguageCategory() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Frontend Languages",
      description: "JavaScript, TypeScript, React, Vue, Angular and more",
      icon: <Web sx={{ fontSize: 60, color: '#00D4FF' }} />,
      color: '#00D4FF',
      route: '/dashboard/frontend'
    },
    {
      title: "Backend Languages", 
      description: "Python, Java, Node.js, Go, Rust, PHP, Ruby and more",
      icon: <Terminal sx={{ fontSize: 60, color: '#00FF87' }} />,
      color: '#00FF87',
      route: '/dashboard/backend'
    },
    {
      title: "Database & Query",
      description: "SQL, MySQL, PostgreSQL, MongoDB, Redis, GraphQL and more",
      icon: <Storage sx={{ fontSize: 60, color: '#FF6B6B' }} />,
      color: '#FF6B6B',
      route: '/dashboard/database'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2D2D2D 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <Code sx={{ fontSize: 48, color: '#00D4FF', mr: 2 }} />
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #00D4FF, #0099FF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              CodeGen.ai
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: '600', mb: 2 }}>
            Choose Your Language Category
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            Select a category to start converting code between languages
          </Typography>
        </Box>

        {/* Category Cards */}
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${category.color}20`,
                  borderRadius: 4,
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    border: `2px solid ${category.color}`,
                    boxShadow: `0 20px 40px ${category.color}30`
                  }
                }}
                onClick={() => navigate(category.route)}
              >
                <CardContent sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%'
                }}>
                  {/* Icon */}
                  <Box sx={{ mb: 3 }}>
                    {category.icon}
                  </Box>
                  
                  {/* Title */}
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold', 
                    //   color: 'white', 
                      mb: 2,
                      background: `linear-gradient(45deg, ${category.color}, ${category.color}CC)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {category.title}
                  </Typography>
                  
                  {/* Description */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      mb: 4,
                      flex: 1
                    }}
                  >
                    {category.description}
                  </Typography>
                  
                  {/* Action Button */}
                  <Button
                    endIcon={<ArrowForward />}
                    sx={{
                      color: category.color,
                      border: `1px solid ${category.color}50`,
                      px: 4,
                      py: 1,
                      borderRadius: 3,
                      '&:hover': {
                        background: `${category.color}15`,
                        border: `1px solid ${category.color}`
                      }
                    }}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Footer Note */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            Support for 50+ programming languages and frameworks
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}