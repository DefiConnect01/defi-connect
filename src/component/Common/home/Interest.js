import React from 'react'
import Template from '../../Shared/Template'
import { InterestData } from '../../data'
import CardSlider from '../../Shared/CardSlider'
import { Col, Row } from 'react-bootstrap'

const Interest = () => {
    return (
        <Template title='More Ways to Get the Best Out of Defi Connect' className='text-primary'>
        <Row className='g-3 g-md-2'>
        {
            InterestData.map((int,index)=>(
                <Col sm={12}  md={4} key={index}>
                  <CardSlider slide={int}/>
                </Col>
                ))
            }
        </Row>
            
        </Template>
    )
}

export default Interest
