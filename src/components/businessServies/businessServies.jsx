
import React from 'react';
import { Container } from 'react-bootstrap';
import Content from './content';
// import LogoBox from './logoBox';
import Logos from './logos'
import ContentPara from './contentPara';
const BusinessServies = () => {
    return (
        <div className='padding-y-150px'>
        <Container>
        <div className="row">
            <div className="col-lg-6">
         < ContentPara/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
            <Content/>
            </div>
            <div className="col-lg-6">
                <Logos/>
            </div>
        </div>
</Container>
    </div>
    );
}

export default BusinessServies;
