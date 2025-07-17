import HeroSection from '../sections/1HeroSection.jsx';
import OfferingsSection from '../sections/2OfferingsSection.jsx';
import ImportantNote from '../sections/3ImportantNote.jsx';
import ReviewsSection from '../sections/4ReviewsSection.jsx';
import { Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <div id='hero' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1 }}>
        <HeroSection />
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ height: '150vh', overflow: 'hidden' }}></div>
        <div id='offerings'>
          <OfferingsSection />
        </div>
        <div id='important'>
          <ImportantNote />
        </div>
        <div id='reviews'>
          <ReviewsSection />
        </div>
      </div>
    </>
  );
}

export default Home;