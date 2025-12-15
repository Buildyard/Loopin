import React from 'react';

const ImportantNote = () => {
  // Define the animation keyframes for the zoom-in effect
  const style = `
    @keyframes zoom-in {
      0% {
        transform: translateZ(-1000px);
        opacity: 0;
        filter: blur(5px);
      }
      50% {
        transform: translateZ(0px);
        opacity: 1;
        filter: blur(0px);
      }
      100% {
        transform: translateZ(1000px);
        opacity: 0;
        filter: blur(5px);
      }
    }
    @keyframes zoom-to-center-stay {
      0% {
        transform: translateZ(-1000px);
        opacity: 0;
        filter: blur(5px);
      }
      50% {
        transform: translateZ(0px) translateX(-12.5vw) translateY(-12.5vh);
        opacity: 1;
        filter: blur(0px);
      }
      100% {
        transform: translateZ(0px) translateX(-12.5vw) translateY(-12.5vh);
        opacity: 1;
        filter: blur(0px);
      }
    }
  `;

  // List of phrases to display
  const phrases = [
    'context memory', 'widget ready', 'API-first', 'no retraining', 'self-learning', 'chat triggers',
    'analytics dashboard', 'State of the art models', 'actionable AI', 'fills forms', 'Customer Support - Done Right', 'quick setup',
    'multichannel', 'lightweight', 'custom flows', 'embed-ready', 'redirects', 'dynamic data',
    'plug & play', 'webhook call', 'auto-summary', 'scalable', 'smart reroute', 'integrate once',
    'low-code config', 'relevance boost', 'SDK Available', 'intent detection', 'enterprise-ready',
    'seamless UX', 'context override', 'session memory', 'low latency', 'bot agent', 'data-aware',
    'Secured', 'UX control', 'response tuning', 'frontend hooks', 'live preview', 'high uptime',
    'air-tight auth', 'react ready', 'feedback loops', 'human handoff', 'trusted by teams',
    'data sync', 'low maintenance', 'works anywhere'
  ];

  // Animation ranges for each phrase
  const animationRanges = [
    '40% 50%', '20% 30%', '52% 62%', '50% 60%', '45% 55%', '10% 20%', '90% 100%',
    '30% 40%', '80% 90%', '70% 80%', '-10% 50%', '52% 62%', '15% 25%', '7% 17%',
    '75% 85%', '3% 13%', '87% 97%', '42% 52%', '57% 67%', '37% 47%', '12% 22%',
    '8% 18%', '84% 94%', '33% 43%', '48% 58%', '13% 23%', '78% 88%', '62% 72%',
    '31% 41%', '8% 18%', '4% 14%', '74% 84%', '61% 71%', '26% 36%', '63% 73%',
    '11% 21%', '89% 99%', '33% 43%', '88% 98%', '22% 32%', '16% 26%', '26% 36%',
    '66% 76%', '3% 13%', '44% 54%', '11% 21%', '23% 33%', '39% 49%', '59% 69%',
    '6% 16%'
  ];

  // Map phrases to items with grid positions and animation ranges
  const items = phrases.map((phrase, index) => {
    const isSpecial = index === 10;
    return {
      content: phrase,
      gridRow: `${Math.floor(index / 4) % 4 + 1}`,
      gridColumn: `${(index % 4) + 1}`,
      animationRange: animationRanges[index] || '0% 100%', // Fallback for extra items
      animationName: isSpecial ? 'zoom-to-center-stay' : 'zoom-in',
    };
  });

  return (
    <>
      <style>{style}</style>
      <div
        style={{
          height: '100vh',
          backgroundColor: 'black',
          position: 'sticky',
          top: 0,
          display: 'grid',
          gridTemplateRows: 'repeat(4, 25vh)',
          gridTemplateColumns: 'repeat(4, 25vw)',
          placeItems: 'center',
          overflow: 'clip',
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              gridRow: item.gridRow,
              gridColumn: item.gridColumn,
              transformStyle: 'preserve-3d',
              fontSize: index === 10 ? '10vmin' : '5vmin',
              fontWeight: index === 10 ? 'bold' : 'lighter',
              whiteSpace: 'nowrap',
              animation: `${item.animationName} linear both`,
              animationTimeline: 'view(block)', // Changed from 'scroll(root block)'
              animationRange: item.animationRange,
              color: 'white',
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default ImportantNote;