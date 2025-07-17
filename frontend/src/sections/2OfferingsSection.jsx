import { useState, useEffect, useRef } from 'react';
import { useTheme, Typography } from '@mui/material';
import vid1 from '../assets/vid1.mp4';
import vid2 from '../assets/vid2.mp4';
import vid3 from '../assets/vid1.mp4';

const OfferingsSection = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  // Content arrays for dynamic updates
  const headings = ['Context-Aware Conversations', 'Actionable Workflows', 'Self-Learning Support'];
  const paragraphs = [
    `The bot understands your business, not just language.
     Integrate company-specific data so the AI can give accurate, on-brand responses — no more generic 
     chatbot replies.`,
    `Beyond chat — it gets things done.
Let the bot trigger predefined actions: fill forms, redirect users, click buttons, or escalate based on context.`,
    `Improves with every conversation.
Each customer interaction helps the model learn new queries, update its memory, and improve future responses.`,
  ];
  const videos = [vid1, vid2, vid3];

  // Scroll event handler to update content
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const scrolledPast = scrollPosition - sectionTop;
        if (scrolledPast >= 0) {
          const index = Math.min(Math.floor(scrolledPast / viewportHeight), 2);
          setCurrentIndex(index);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        height: '400vh',
        backgroundColor: theme.background.light,
        borderTopLeftRadius: '80px',
        borderTopRightRadius: '80px',
        borderBottomLeftRadius: '80px',
        borderBottomRightRadius: '80px',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '50px',
        }}
      >
        <div style={{ display: 'flex', width: '90%', height: '80vh', gap: '20px' }}>
          {/* Left Section */}
          <div
            style={{
              flex: '1',
              backgroundColor: theme.background.dark,
              padding: '20px',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" sx={{ color: '#fff' }}>
              {headings[currentIndex]}
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', marginTop: '10px' }}>
              {paragraphs[currentIndex]}
            </Typography>
          </div>
          {/* Right Section */}
          <div
            style={{
              flex: '2',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <video
              src={videos[currentIndex]}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;