import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { Button, Col, Row } from 'react-bootstrap'
import {FaGreaterThan} from 'react-icons/fa'

import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='container-fluid'>
        
        <Row className='justify-content-between align-items-center pt-5 overflow-hidden' style={{marginTop:100}}>
        <Col sm={12} md={7} className=''>
        <Slide direction='left'>
           <h2 className='fs-head'>Fastest & Secure
            Platform to <b className='colorBlue me-2'>BORROW</b>
            your crypto.</h2>
            <p className='fs-subhead fw-light'>Borrow without selling your crypto with rates 
            as low as 0% and no extra fees. Just top up 
            and your credit line is immediately available.</p>
            <Button>
            <Link to='/borrow'>
            <span className='fw-bold text-white'>BORROW NOW <FaGreaterThan/></span>
            </Link>
            </Button>
        </Slide>    
    </Col>
    <Col sm={12} md={5} className='mt-3 mt-md-0'>
     <Slide direction='left'>
        <img src={require('./../../asset/images/hero.svg').default} className='hero'  alt=''/>
     </Slide>
      </Col>
           
            
        </Row>
        </section>
    )
}

export default Hero
