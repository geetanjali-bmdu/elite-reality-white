import React from 'react'
import { Container } from 'react-bootstrap'

import Left from './Left'
import Right from './Right'

export default function footer() {
  return (
    <div className="bg-brown  white-color ">

      <Container>
    <div className='padding-y-50px'>

      <div className="row">
        <div className="col-md-6">
      <Left/>
        </div>
        <div className="col-md-6">
      <Right/>
        </div>
      </div>
    </div>
    <div className="row">
        <div className="col-md-6">
          <p>
          © 2022 
          <a href="/">Elite reality</a>
          , All Rights Reserved
          </p>
        </div>
        </div>
      </Container>
    </div>
  )
}
