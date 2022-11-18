import React from 'react';
import './business.css';


const LogoBox = (props) => {
    return (
        <div className='logo-box m-auto'>
            <img src={`${props.logoUrls}`}alt={`logo`} />
        </div>
    );
}

export default LogoBox;
