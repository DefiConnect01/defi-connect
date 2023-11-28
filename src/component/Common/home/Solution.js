import React from 'react'
import Template from '../../Shared/Template'
import { solutionDataCard, templatetHead } from '../../data'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Solution = () => {
    const solutionData = templatetHead[3]
    const {solutionData:{title}}=solutionData
    return (
        <Template title={title} className='text-primary'>
           <Row className='container-fluid justify-content-between align-items-center'>
            <Col sm={12} md={6}>
              {
                solutionDataCard.map((sol,index)=>(
                <section className='row my-4' key={index}>
                   <img src={sol.img} alt='' className='col-3' style={{width:'75px',height:'75px'}}/>
                   <div className='col-12 col-md-9 text-start'>
                     <h6 className='fs-body'>{sol.cardHeader}</h6>
                     <p className='fs-subbody text-black'>{sol.cardBody}</p>
                     
                   </div>
                   
                </section>
                ))
              }
            </Col>
            <Col sm={12} md={6}>
               <img src={require('./../../asset/images/sol.svg').default} alt='' className='solutionImg' />
            </Col>
            <Button className='w-25 mx-auto p-2'>
              <Link to='/borrow' className='text-white'>
              Get Started
              </Link>
              </Button>
           </Row> 
        </Template>
    )
}

export default Solution
