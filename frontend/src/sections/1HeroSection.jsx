import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import background_video from '../assets/hero_background.mp4';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    const heroHeight = window.innerHeight;
    const maxScroll = heroHeight * 0.5; // 50vh
    if (position <= maxScroll) {
      setScrollPosition(position / maxScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const videoOpacity = 1 - scrollPosition * 0.5; // Video fades out
  const textOpacity = 1 - scrollPosition; // Paragraphs fade out
  const underlineOpacity = 1 - scrollPosition; // Underlines fade out
  const headingScale = 1 + scrollPosition * 0.6; // Headings scale up

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          opacity: videoOpacity,
        }}
      >
        <source src={background_video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: `rgba(0, 0, 0, ${0.4 + scrollPosition * 0.6})`, // Starts at 0.4, darkens with scroll
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <Container
        sx={{
          position: 'relative',
          height: '100%',
          zIndex: 2,
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          py: { xs: 6, md: 8 },
        }}
      >
        {/* Center Text */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${headingScale})`,
            textAlign: 'center',
            maxWidth: '800px',
            width: '100%',
            transition: 'transform 0.5s ease-out',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              textDecoration: underlineOpacity > 0 ? 'underline' : 'none',
              textDecorationColor: `rgba(255, 255, 255, ${underlineOpacity})`,
              textUnderlineOffset: '8px',
              lineHeight: 1.2,
            }}
          >
            Support Smarter, Scale Simpler
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              opacity: textOpacity,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Give your customers instant, accurate, and action-driven responses powered by your business context.
          </Typography>
        </Box>

        {/* Bottom Left and Right Texts */}
        <Grid container spacing={4} sx={{ mt: 'auto' }}>
          {/* Bottom Left */}
          <Grid item xs={12} sx={{ position: 'absolute', left: 0, bottom: 50 }}>
            <Box sx={{ maxWidth: '400px' }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  textDecoration: underlineOpacity > 0 ? 'underline' : 'none',
                  textDecorationColor: `rgba(255, 255, 255, ${underlineOpacity})`,
                  textUnderlineOffset: '6px',
                  lineHeight: 1.3,
                  // transform: `scale(${headingScale})`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                Trusted by Growing Businesses
              </Typography>
              <Typography variant="body1" sx={{ opacity: textOpacity }}>
                Reduce support volume and resolve issues faster with AI tuned to your domain.
              </Typography>
            </Box>
          </Grid>

          {/* Bottom Right */}
          <Grid item xs={12} sx={{ position: 'absolute', right: 0, bottom: 50, textAlign: 'right' }}>
            <Box sx={{ maxWidth: '400px', ml: 'auto' }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  textDecoration: underlineOpacity > 0 ? 'underline' : 'none',
                  textDecorationColor: `rgba(255, 255, 255, ${underlineOpacity})`,
                  textUnderlineOffset: '6px',
                  lineHeight: 1.3,
                  // transform: `scale(${headingScale})`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                More Than Just a Chatbot
              </Typography>
              <Typography variant="body1" sx={{ opacity: textOpacity, lineHeight: 1.5 }}>
                Trigger actions, fill forms, and navigate users—right from the conversation.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;