import React from 'react';
import background_video from '../assets/hero_background.mp4';

const HeroSection = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
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
        }}
      >
        <source src={background_video} type="video/mp4" />
      </video>

      {/* Dark overlay for better text visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Text Content Container */}
      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 40px',
          zIndex: 2,
          color: 'white',
        }}
      >
        {/* Center Text - Biggest */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            maxWidth: '800px',
            width: '100%',
          }}
        >
          <h1
            style={{
              fontWeight: 'bold',
              marginBottom: '16px',
              textDecoration: 'underline',
              textDecorationColor: '#fff',
              textDecorationThickness: '3px',
              textUnderlineOffset: '8px',
              lineHeight: 1.2,
            }}
          >
            Support Smarter, Scal Simpler
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              lineHeight: 1.6,
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Give your customers instant, accurate, and action-driven responses powered by your business context.
          </p>
        </div>

        {/* Bottom Section Container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          {/* Bottom Left Text */}
          <div
            style={{
              flex: 1,
              minWidth: '280px',
              maxWidth: '400px',
            }}
          >
            <h4
              style={{
                fontWeight: 'bold',
                marginBottom: '8px',
                textDecoration: 'underline',
                textDecorationColor: '#fff',
                textDecorationThickness: '2px',
                textUnderlineOffset: '6px',
                lineHeight: 1.3,
              }}
            >
              Trusted by Growing Businesses
            </h4>
            <p
              style={{
                lineHeight: 1.5,
                opacity: 0.85,
              }}
            >
              Reduce support volume and resolve issues faster with AI tuned to your domain.
            </p>
          </div>

          {/* Bottom Right Text */}
          <div
            style={{
              flex: 1,
              minWidth: '280px',
              maxWidth: '400px',
              textAlign: 'right',
            }}
          >
            <h4
              style={{
                fontWeight: 'bold',
                marginBottom: '8px',
                textDecoration: 'underline',
                textDecorationColor: '#fff',
                textDecorationThickness: '2px',
                textUnderlineOffset: '6px',
                lineHeight: 1.3,
              }}
            >
              More Than Just a Chatbot
            </h4>
            <p
              style={{
                lineHeight: 1.5,
                opacity: 0.85,
              }}
            >
              Trigger actions, fill forms, and navigate users—right from the conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;