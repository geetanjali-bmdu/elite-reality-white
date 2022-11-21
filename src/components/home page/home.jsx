import React from 'react';
import Carousel from './componets/banner/Carousel';
import About from './componets/about-breif/about'
import Features from './componets/features/features'
import BusinessServies from './componets/businessServies/businessServies';
import Applynow from './componets/applynow/applynow';
const Home = () => {
    return (
        <div>
<Carousel/>
      <About/>
      <Features/>
      <BusinessServies/>
      <Applynow/>

        </div>
    );
}

export default Home;
