import React from 'react'
import { Container } from 'react-bootstrap'
import Content from './content'
import Picture from './picture'

export default function applynow() {
  return (
    <div>
        <Container fluid>

        <div className="row">
            <div className="col-md-6">
              <Picture/>
              </div>
              <div className="col-md-6">
                <Content/>
              </div>
        </div>
        </Container>
    </div>
  )
}
