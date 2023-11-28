import React from 'react'
import Template from '../../Shared/Template'
import { SliderData, templatetHead } from '../../data';
import SliderContainer from '../../Shared/SliderContainer';
import { Col, Row } from 'react-bootstrap';


const Utilize = () => {
    const UtilizeContent = templatetHead[2];
    const { UtilizeContent:{title, para}} = UtilizeContent;
    

    return (
        <Template title={title} para={para} className='container-fluid'>
          <Row className='justify-content-between gap-1 overflow-hidden'>
          <SliderContainer>
          {SliderData.map((data, index) => (
            <Col sm={12} md={3} key={index}>
                <div style={{ position: 'relative' }}>
                    <img src={data.title} alt='' className='w-75' />
                    <span style={{
                        position: 'absolute',
                        top: '90%',
                        left: '30%',
                        transform: 'translate(-50%, -50%)',
                        color:'white'
                    }}>{data.subt}</span>
                </div>
            </Col>
        ))}
                </SliderContainer>
                </Row>  
        </Template>
    )
}

export default Utilize
