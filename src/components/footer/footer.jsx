import React from 'react'
import { Container } from 'react-bootstrap'

import Left from './Left'
import Right from './Right'

export default function footer() {
  return (
    <div className='bg-brown white-color'>
      <Container>

      <div className="row">
        <div className="col-md-6">
      <Left/>
        </div>
        <div className="col-md-6">
      <Right/>
        </div>
      </div>
      </Container>
    </div>
  )
}
