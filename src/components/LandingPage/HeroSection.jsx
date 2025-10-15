import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Container, AppBar, Toolbar } from '@mui/material';
// import { Code } from '@mui/icons-material';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Landing() {
  const navigate = useNavigate();

  // Languages for carousel
  const languages = [
    'Python', 'JavaScript', 'Java', 'C++', 'Go', 'Rust', 
    'TypeScript', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin', 
    'R', 'MATLAB', 'Julia', 'Perl', 'Scala', 'Dart', 'Elixir', 'Haskell'
  ];

  return (
    
<Box sx={{ 
  minHeight: '100vh', 
  background: '#0A0A0A',
  color: 'white',
  overflow: 'hidden',
  padding: '0 !important',
  margin: '0 !important',
  position: 'relative'
}}>
  
  {/* Dark Blue Gradient Blob - Top Left */}
  <Box sx={{
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '40%',
    height: '40%',
    background: 'radial-gradient(circle, #1E3A8A 0%, transparent 70%)',
    filter: 'blur(40px)',
    opacity: 0.4,
    borderRadius: '50%'
  }}/>

  {/* Dark Blue Gradient Blob - Bottom Right */}
  <Box sx={{
    position: 'absolute',
    bottom: '-15%',
    right: '-5%',
    width: '50%',
    height: '50%',
    background: 'radial-gradient(circle, #1E40AF 0%, transparent 70%)',
    filter: 'blur(50px)',
    opacity: 0.3,
    borderRadius: '50%'
  }}/>

  {/* Dark Blue Gradient Blob - Random Middle Left */}
  <Box sx={{
    position: 'absolute',
    top: '30%',
    left: '5%',
    width: '30%',
    height: '30%',
    background: 'radial-gradient(circle, #1E3A8A 0%, transparent 70%)',
    filter: 'blur(30px)',
    opacity: 0.2,
    borderRadius: '50%'
  }}/>

  {/* Subtle Grid Pattern */}
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
    backgroundSize: '60px 60px',
    pointerEvents: 'none'
  }}/>

  {/* Your content will go here */}
  <Box sx={{ position: 'relative', zIndex: 1 }}>
    {/* Navbar and hero content will be placed here */}
  </Box>
      {/* -----------------login/signup---------------- */}

{/* Top Right Auth Buttons - Hidden on Mobile */}
<Box sx={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  display: { xs: 'none', md: 'flex' },
  gap: 2,
  zIndex: 1000
}}>
  <Button 
    onClick={() => navigate('/login')}
    sx={{ 
      color: 'rgba(255,255,255,0.9)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: '25px',
      px: 3,
      py: 1,
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      fontSize: '0.9rem',
      '&:hover': { 
        bgcolor: 'rgba(255,255,255,0.1)',
        borderColor: '#00D4FF',
        color: '#00D4FF'
      },
      transition: 'all 0.3s ease'
    }}
  >
    Login
  </Button>
  
  <Button 
    onClick={() => navigate('/signup')}
    sx={{ 
      bgcolor: '#00D4FF',
      color: '#0A0A0A',
      borderRadius: '25px',
      px: 3,
      py: 1,
      fontFamily: '"Inter", sans-serif',
      fontWeight: '600',
      fontSize: '0.9rem',
      '&:hover': {
        bgcolor: '#0099FF',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 20px rgba(0, 212, 255, 0.3)'
      },
      transition: 'all 0.3s ease'
    }}
  >
    Sign Up
  </Button>
</Box>

    {/* -------------------navbar------------------- */}
    <Box
      sx={{
        position: "relative",
        maxWidth: { xs: "95%", md: "1000px" },
        margin: "20px 0 0 20px",
        alignSelf: "flex-start",
      }}
    >
      <AppBar
        position="static"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          borderRadius: "50px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Toolbar
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    py: 1,
    minHeight: "60px !important",
    px: { xs: 2, md: 4 },
  }}
>
  {/* --- ✅ Logo Section --- */}
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box
      component="img"
      src="https://static.vecteezy.com/system/resources/previews/004/909/777/non_2x/coding-logo-design-template-vector.jpg" // 🔹 your logo path here
      alt="CodeGen Logo"
      sx={{
        width: { xs: 35, md: 45 },
        height: "auto",
        borderRadius: "50%",
        boxShadow: "0 0 10px rgba(0,212,255,0.5)",
      }}
    />
    <Typography
      sx={{
        fontFamily: '"Inter", sans-serif',
        fontWeight: 600,
        fontSize: { xs: "1rem", md: "1.2rem" },
        color: "#00D4FF",
        letterSpacing: "0.5px",
      }}
    >
      CodeGen
    </Typography>
  </Box>

  {/* --- ✅ Menu Section (Languages, Features, etc.) --- */}
  <Box
    sx={{
      display: "flex",
      gap: { xs: 1, md: 3 },
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >

     
            {/* Languages with Dropdown */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                "&:hover .dropdown": {
                  opacity: 1,
                  visibility: "visible",
                  transform: "translateY(0)",
                },
                "&:hover .lang-text": {
                  color: "#00D4FF",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                },
                "&:hover .arrow": {
                  transform: "rotate(180deg)",
                  color: "#00D4FF",
                },
              }}
            >
              {/* Main Label + Icon */}
              <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <Typography
                  className="lang-text"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    color: "rgba(255,255,255,0.9)",
                    px: { xs: 2, md: 3 },
                    py: 1,
                    borderRadius: "25px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Languages
                </Typography>
                <ArrowDropDownIcon
                  className="arrow"
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    transition: "all 0.3s ease",
                    fontSize: "1.6rem",
                  }}
                />
              </Box>

              {/* Hover Dropdown */}
              <Box
                className="dropdown"
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  mt: 1,
                  bgcolor: "rgba(30, 30, 30, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  p: 3,
                  minWidth: { xs: "280px", md: "600px" },
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)", // 6 columns
                  gridAutoRows: "minmax(30px, auto)", // 5 rows adjust automatically
                  gap: 1.2,
                  opacity: 0,
                  visibility: "hidden",
                  transform: "translateY(-10px)",
                  transition: "all 0.3s ease",
                  zIndex: 1000,
                }}
              >
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Vue",
                  "Angular",
                  "Svelte",
                  "Node.js",
                  "Express",
                  "Python",
                  "Django",
                  "Flask",
                  "Java",
                  "Spring",
                  "C",
                  "C++",
                  "C#",
                  "Go",
                  "Rust",
                  "PHP",
                  "Laravel",
                  "Ruby",
                  "Swift",
                  "Kotlin",
                  "Dart",
                  "SQL",
                  "MongoDB",
                  "PostgreSQL",
                ].map((lang) => (
                  <Box
                    key={lang}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.05)",
                      color: "#00D4FF",
                      px: 2,
                      py: 0.8,
                      borderRadius: "10px",
                      fontSize: "0.85rem",
                      border: "1px solid rgba(0,212,255,0.3)",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(0, 212, 255, 0.15)",
                        borderColor: "#00D4FF",
                        color: "#00FFFF",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {lang}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Other Menu Items */}
            {["Features", "How It Works", "Docs", "Contact"].map((item) => (
              <Typography
                key={item}
                sx={{
                  cursor: "pointer",
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "rgba(255,255,255,0.9)",
                  px: { xs: 2, md: 3 },
                  py: 1,
                  borderRadius: "25px",
                  "&:hover": {
                    color: "#00D4FF",
                    bgcolor: "rgba(0, 212, 255, 0.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

      {/* Main Hero Content */}
      <Container sx={{ 
        textAlign: 'center', 
        py: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh'
      }}>

{/* Main Heading - ONLY CodeGen.ai */}
<Box sx={{ textAlign: 'center', mb: 6, marginTop: '-50px' }}>
  <Typography 
    variant="h1" 
    sx={{ 
      fontWeight: '900',
      fontSize: { xs: '4rem', md: '6rem', lg: '7rem' },
      fontFamily: '"Poppins", sans-serif',
    background: 'linear-gradient(45deg, #00D4FF, #0099FF, #0066FF, #0044CC)',
      backgroundSize: '300% 300%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      lineHeight: 1,
      animation: 'gradientShift 3s ease infinite',
      '@keyframes gradientShift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' }
      }
    }}
  >
    CodeGen
<Box 
  component="span" 
  sx={{
    // background: 'linear-gradient(45deg, #00D4FF, #0099FF, #0066FF, #0099FF)',
    backgroundSize: '300% 300%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    borderRadius: "50%",
    color: 'red',
  }}
>
  .
</Box>
<Box 
  component="span" 
  sx={{
    background: 'linear-gradient(45deg, #00D4FF, #0099FF, #0066FF, #0099FF)',
    backgroundSize: '300% 300%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: 'gradientShift 3s ease infinite',
    '@keyframes gradientShift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' }
    }
  }}
>
  ai
</Box>
  </Typography>
</Box>
{/* --------convert code between 50+ languges---- */}
{/* Convert Code Between 50+ Languages Subheading */}
<Typography 
  variant="h2" 
  sx={{ 
    fontWeight: '700',
    fontSize: { xs: '1.8rem', md: '3rem', lg: '3.5rem' },
    fontFamily: '"Poppins", sans-serif',
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    lineHeight: 1.2,
    // mt: 2,
    mb: 4,
    maxWidth: '100%'

  }}
>
  Convert Code Between{' '}
  <Box 
    component="span" 
    sx={{
      background: 'linear-gradient(45deg, #00D4FF, #0099FF, #0066FF)',
      backgroundSize: '300% 300%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      animation: 'gradientShift 3s ease infinite',
      '@keyframes gradientShift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' }
      }
    }}
  >
    50+ Languages
  </Box>
</Typography>
        {/* Subtitle */}
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 6,
            fontFamily: '"Inter", sans-serif',
            // color: '#94A3B8',
            color: "white",
            maxWidth: '600px',
            lineHeight: 1.6
          }}
        >
          AI-powered code translation that understands your code's logic, 
          not just syntax. Fast, accurate, and developer-friendly.
        </Typography>

        {/* Action Buttons - Centered */}
        <Box sx={{ 
          display: 'flex', 
          gap: 3, 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          mb: 8
        }}>
          <Button
            onClick={() => navigate('/login')}
            variant="contained"
            sx={{
              bgcolor: '#00D4FF',
              color: 'white',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: 3,
              fontFamily: '"Inter", sans-serif',
              boxShadow: '0 8px 32px rgba(0, 212, 255, 0.3)',
              '&:hover': {
                bgcolor: '#0099FF',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(0, 212, 255, 0.4)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Start Now with CodeGen
          </Button>
          
          <Button
            variant="outlined"
            sx={{
              borderColor: 'rgba(255,255,255,0.3)',
              color: 'white',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: 3,
              fontFamily: '"Inter", sans-serif',
              '&:hover': {
                borderColor: '#00D4FF',
                bgcolor: 'rgba(0, 212, 255, 0.1)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Try Demo
          </Button>
        </Box>
      </Container>

      {/* Bottom Moving Languages Carousel */}
      <Box sx={{ 
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        py: 4,
        bgcolor: 'rgba(0,0,0,0.2)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
        // mt: 'auto'
         mt: { xs: '-60px', sm: '-100px', md: '-150px' },
      }}>
        <Box sx={{ 
          display: 'flex',
          animation: 'marquee 30s linear infinite',
          gap: 4,
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' }
          }
        }}>
          {/* Double the array for seamless loop */}
          {[...languages, ...languages].map((language, index) => (
            <Box
              key={index}
              sx={{
                px: 4,
                py: 2,
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 8,
                color: 'white',
                fontWeight: '600',
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: '#00D4FF',
                  borderRadius: '50%'
                }}
              />
              {language}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}