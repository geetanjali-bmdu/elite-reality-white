
import React from 'react';
import About from '../body/about-breif/about';
// import { Container } from 'react-bootstrap';
import Contnent from './componets/contnent';
import Title from './componets/title';


const AboutUs = () => {
    return (
        <div>
          <Title/>
          <About
          title1 = {"Launch your creative ideas. Whatever you "}
          title2 ={"imagine we"}
          title3 = {"will make it happen with our team of specialists."}
          ceo = {"ALEX LEE, CEO"}/>
         
          <Contnent/>

        </div>
    );
}

export default AboutUs;
