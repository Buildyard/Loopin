import HeroSection from '../sections/1HeroSection.jsx';
import OfferingsSection from '../sections/2OfferingsSection.jsx';
import ImportantNote from '../sections/3ImportantNote.jsx';
import ReviewsSection from '../sections/4ReviewsSection.jsx';
import { Button, Typography } from '@mui/material';


const Home = () => {
  return <>
  <div id='hero'>
  <HeroSection />
  </div>
  
  <div id='offerings'>
  <OfferingsSection />
  </div>

  <div id='important'>
  <ImportantNote />
  </div>
  
  <div id='reviews'>
  <ReviewsSection />
  </div>
  </>;
}
export default Home;
