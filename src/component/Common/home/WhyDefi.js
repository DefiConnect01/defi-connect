import React from 'react';
import Template from './../../Shared/Template';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import { templatetHead, whyDefiContent } from '../../data';
import { Fade, Slide } from 'react-awesome-reveal';


const WhyDefi = () => {
  const whyDefiData = templatetHead[1];
  const { whyDefiData:{title, para, img, img1, img2 }} = whyDefiData;

  return (
    <Template title={title} para={para} className='text-primary container-fluid' >
      <Card className='shadow-lg whyDefi rounded-4 p-0' id='usecase'>
        <Row className='align-items-center container-fluid'>
          <Col sm={12} md={4} className=' '>
            <section className='d-flex flex-row justify-content-center flex-md-column '>
            <Slide direction='left'>
            <img src={img1} className='whyDefiImage' alt='' />
            <img src={img2} className='whyDefiImage' alt='' />
            </Slide>
            
            </section>
          </Col>
          <Col sm={12} md={8} className='container-fluid'>
            <Stack>
              {whyDefiContent.map((content, index) => (
                <Slide direction='left' cascade key={index}>
                <Stack direction='horizontal' className='text-start  border-bottom border-5 p-2 ' >
                  <div className='item-first text-wrap fs-why'>{content.itemFirst}</div>
                  <div className='item-second-last text-center fs-why ' style={{color:content.itemSecond==='Instant Crypto Credit Lines'?'blue':'green'}}>
                    {content.itemSecond}
                  </div>
                  <div className='item-second-last text-center fs-why' style={{color:content.itemLast==='Conventional Loans'?'blue':''}}>{content.itemLast}</div>
                  </Stack>
                  </Slide >
              ))}
            </Stack>
          </Col>
        </Row>
      </Card>
    </Template>
  );
};

export default WhyDefi
