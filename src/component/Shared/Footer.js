import React from 'react';
import { Col,Row, Stack } from 'react-bootstrap';
import { footData} from '../data';

import FooterAds from './FooterAds';
import FooterEmail from './FooterEmail';

const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-5">
     <Stack>
        <Row className='justify-justify-content-around justify-content-md-between'>
          <Col xm={12} sm={6} md={4} className='align-self-center'>
            <img src={require('./../asset/images/deficonnect _lo.svg').default} className='' style={{height:'50px',width:'50px'}} alt=''/>
          </Col>
          <Col xm={12} sm={6} md={4}>
           <FooterEmail/>
          </Col>
          <Col xm={12} sm={6} md={4}>
          <div className="d-flex justify-content-center justify-content-md-end gap-4">
                       {footData.map((data, index) => (
                         <a href={data.path} key={index} target={data.path ? '_blank':''} rel='noreferrer'>
                           {data.icon}
                         </a>
                       ))}
                     </div>
          </Col>
        </Row>
     </Stack>
     <Stack>
       <FooterAds/>
     </Stack>
     <Stack>
       <p>
       All or part of the Defi Connect Credit Services, some features thereof, or some Digital Assets, are not available in certain jurisdictions, including where 
       restrictions or limitations may apply, as indicated on the Defi connect Platform and in the relevant general terms and conditions.
       </p>
       <p>
       Copyright 2023 Defi Connect. All rights reserved.
       </p>
     </Stack>
      
    </footer>
  );
};

export default Footer;

