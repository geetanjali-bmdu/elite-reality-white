import React from 'react';
import { Container } from 'react-bootstrap';
import ContentWithBtn from './content-with-btn';
import FeaturesBoxes from './features-boxes';
import './features.css'


const Features = () => {
    return (
        <div className='bg-brown'>
            <Container>
            <div className="row">
                <div className="col-lg-6">
                    <ContentWithBtn titleColor = "white"/>
                </div>
                <div className="col-lg-6">
               <FeaturesBoxes/>
                </div>
            </div>
</Container>
        </div>
    );
}

export default Features;
