import React from 'react'
import { Stack } from 'react-bootstrap'

const Template = ({children,title,para,className}) => {
    return (
        <div style={{width:'100%'}} className={`rounded-5 text-center template ${className}`}>
            <h3 className='text-center px-5 fs-title'>{title}</h3>
            <p className='text-center px-3 fs-subtitle'>{para}</p>
            <main style={{width:'100%'}}>
            {children}
            </main>
        </div>
    )
}

export default Template