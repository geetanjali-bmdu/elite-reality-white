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
      <About title1= "From strategy to delivery, we are here"
      title2 ="to make sure your business"
      title3 = " endeavor succeeds. Trust our experts."
      ceo="ALEX LEE, CEO"
      />
      <Features/>
      <BusinessServies/>
      <Applynow/>

        </div>
    );
}

export default Home;
