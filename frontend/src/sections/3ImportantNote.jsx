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
  `;

  // List of phrases to display
  const phrases = [
    'oklch()', 'scroll()', 'text-box-trim', 'pow()', '@property', 'top-layer',
    '@view-transition', 'var()', 'clamp()', 'view()', 'Important Note', '@layer',
    '@swash', 'subgrid', 'in oklab', ':popover-open', 'abs()', 'sin()', ':has()',
    '::marker', '1cap', 'scrollbar-color', 'scroll-timeline', 'view-timeline',
    'overlay', 'scale', 'ascent-override', 'initial-letter', 'inset', '@container',
    'accent-color', 'color-mix()', '@scope', '@starting-style', 'override-colors',
    'anchor()', 'scroll-snap', '::backdrop', '::cue', ':focus-visible', ':user-valid',
    ':fullscreen', ':dir()', 'caret-color', 'aspect-ratio', 'cross-fade()',
    'image-set()', 'env()', 'place-content', 'gap'
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
  const items = phrases.map((phrase, index) => ({
    content: index === 10 ? <b style={{ fontSize: '15vmin' }}>{phrase}</b> : phrase,
    gridRow: `${Math.floor(index / 4) % 4 + 1}`,
    gridColumn: `${(index % 4) + 1}`,
    animationRange: animationRanges[index] || '0% 100%', // Fallback for extra items
  }));

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
              fontSize: '5vmin',
              fontWeight: 'lighter',
              whiteSpace: 'nowrap',
              animation: 'zoom-in linear both',
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