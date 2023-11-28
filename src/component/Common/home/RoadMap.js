import React from 'react'
import Template from '../../Shared/Template'
import { RoadDataMap, templatetHead } from '../../data'
import { Button, Col, Row } from 'react-bootstrap'

const RoadMap = () => {
    const RoadmapData = templatetHead[5]
    const {title}= RoadmapData.RoadMapData
    
    return (
        <Template title={title} className='text-primary border border-2 border-light-subtle p-3' >
        <Button className='w-50 mx-auto'>CORE MISSION</Button>
        <Row className='text-white mt-5 justify-content-between container-fluid g-2' id='roadmap' >
          {
            RoadDataMap.map((data,index)=>(
                <Col xm={12} md={6} key={index}>
                   <section className='position-relative mb10'>
                     <div className='roadCardTop rounded-5 p-2 p-sm-3 p-md-3'>{data.head}</div>
                     <div className='roadCard pt-5 text-center rounded-4'>
                       <p className='p-2'>{data.body}</p>
                       <p className='p-2'>{data.body2}</p>
                     </div>
                   </section>
                </Col>
            ))
          }

          <p className='text-black'>This roadmap is a general guide and is subject to adjustment based on market conditions, user feedback, and emerging opportunities. 
          We are committed to keeping our users and investors informed about our progress and milestones achieved as we move toward realizing our vision</p>
        </Row>
            
        </Template>
    )
}

export default RoadMap
