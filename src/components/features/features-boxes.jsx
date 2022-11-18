import React from 'react'
import { Container } from 'react-bootstrap'
import Box from './box'

export default function featuresBoxes() {
  return (
    <div>
        <Container>

        <div className="row m-auto padding-y-150px px-auto">
            <div className="col-md-6">
                <Box title = "yearly project" digit ={23}/>
            </div>
            <div className="col-md-6">
                <Box title = "Yearly project" digit ={23}/>
            </div>
            <div className="col-md-6">
                <Box title = "yearly project" digit ={23}/>
            </div>
            <div className="col-md-6">
                <Box title = "yearly project" digit ={23}/>
            </div>
        </div>
        </Container>
    </div>
  )
}
