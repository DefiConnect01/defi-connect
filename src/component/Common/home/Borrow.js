import React from 'react'
import Template from './../../Shared/Template'
import { templatetHead } from '../../data'

const Borrow = () => {
const BorrowData = templatetHead[0]
const {BorrowData:{ title, para,img} } = BorrowData;


    return (
        <Template title={title} para={para} className='container'>
          <section>
            <img src={img} alt='' className='img-fluid'/>
          </section>  
        </Template>
    )
}

export default Borrow
