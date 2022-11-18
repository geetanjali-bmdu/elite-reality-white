import React from 'react';

const Box = (props) => {
    return (
        <div className="mx-5 my-5">

            <span className="digit trasparent-white-color">{props.digit}</span>
            <h5 className="white-color">{props.title}</h5>
        </div>
    );
}

export default Box;
