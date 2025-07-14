import HeroSection from '../sections/1HeroSection.jsx';
import OfferingsSection from '../sections/2OfferingsSection.jsx';
import ImportantNote from '../sections/3ImportantNote.jsx';
import ReviewsSection from '../sections/4ReviewsSection.jsx';
import { Button, Typography } from '@mui/material';


const Home = () => {
  return <>
  Hiasas
  <Button variant="contained" color="primary">hi</Button>
  <HeroSection />
  <OfferingsSection />
  <ImportantNote />
  <ReviewsSection />
  </>;
}
export default Home;
