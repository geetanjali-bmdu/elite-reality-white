import React from 'react'
import { Container } from 'react-bootstrap'
import Content from './content'
import Picture from './picture'
import './applynow.css'

export default function applynow() {
  return (
    <div >
        <Container fluid>

        <div className="row applynow-background">
            <div className="col-lg-6 mx-0 ">
              <Picture/>
              </div>
              <div className="col-lg-6 mx-0 ">
                <Content/>
              </div>
        </div>
        </Container>
    </div>
  )
}
