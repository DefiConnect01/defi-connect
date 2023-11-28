import React from 'react'
import { Card, Col, Row} from 'react-bootstrap'
import { templatetHead } from '../../data'
import Template from '../../Shared/Template'


const Team = () => {
    const partner = templatetHead[9]
    const {title,teamDetails} = partner.TeamData
    return (
        <Template title={title} className='fagBg px-0 px-md-3 py-4'>
        <Row className='px-1 px-md-3 container-fluid'>
          {
            teamDetails.map((data,index)=>(
                <Col xs={12} sm={6} md={4} key={index} className='g-3 '>
                    <Card className='py-1 py-md-3 pt-2 pt-md-3 px-1 px-md-1 rounded-4 teamCard'>
                        <div>
                        <img src={data.teamImg} alt={data.id}  className='rounded-5 teamImg'/>
                        <h5 className='mt-4'>{data.teamName}</h5>
                        <div className='mt-3'>{data.teamTitle}</div>
                        <p>{data.teamDescription}</p>
                        </div>
                    </Card>
                </Col>
            ))
          }
        </Row>
            
        </Template>
    )
}

export default Team
