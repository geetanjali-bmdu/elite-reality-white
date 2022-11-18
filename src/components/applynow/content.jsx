import React from "react";
import { Container } from "react-bootstrap";
import './applynow.css'
const Content = () => {
  return (
    <div className="content-background-img margin-y-150px  position-relative ">
        {/* <Container> */}
      <div className="position-absolute">
      <h2>
        What will investments look
        <br />
        like after the pandemic year?{" "}
      </h2>
      <p className="padding-y-10px">
        Duis aute irure dolor in reprehenderit in voluptate velit
        <br />
        esse cillum dolore eu fugiat nulla pariatur.
      </p>
        </div>      

<div className="row p-auto ">
    <div className="col-8">
        <h4>
            
Apply for online conference
<br />
"Investments of the future"	
        </h4>

    </div>
    <div className="col-4 padding-y-10px arrow">
       <a href="/"><h1>.</h1> </a>
    </div>
</div>


        {/* </Container> */}

    </div>
  );
};

export default Content;
