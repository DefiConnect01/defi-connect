import React from 'react'
import { footerContent } from '../data'
import { Col, Row } from 'react-bootstrap'

const FooterAds = () => {
    return (
        <Row className='justify-content-between align-items-start mt-3'>
        {
            footerContent.map((data,index)=>(
              <Col xs={12} sm={6} md={3} key={index}>
                <h4>{data.item}</h4>
                <>
                  {
                     data.itemDetail.map((dat,index)=>(
                      <ul key={index}>
                         <li className='fs-subbody'>{dat.name}</li>
                      </ul>
                     ))
                  }
                </>
              </Col>
            ))
          }
          </Row>
        
    )
}

export default FooterAds
