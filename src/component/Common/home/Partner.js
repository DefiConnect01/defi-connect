import React from 'react'
import Template from './../../Shared/Template'
import { templatetHead } from '../../data'
import {  Col, Row } from 'react-bootstrap'

const Partner = () => {
    const partner = templatetHead[8]
    const {title,partnersImg} = partner.partnerData
  
    return (
        <Template title={title}>
        
         <Row className='justify-content-between g-2 container-fluid' id='partner'>
           {
            partnersImg.map((data,index)=>(
              <Col xs={6} sm={4} md={3} key={index}>
               <img src={data.imgUrl} alt={data.id} className='partnerImg'/>
           </Col>
            ))
           }
         </Row>
            
        </Template>
    )
}

export default Partner
