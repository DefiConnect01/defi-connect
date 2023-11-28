import React from 'react';
import { FagData } from './../../data';


const Fags = () => {
  return (
     <section className='text-primary fagBg rounded-3 py-5 d-flex flex-column justify-content-center'>
     <h3 className='subhead text-center py-3'>FAQs</h3>
     <section className='d-flex justify-content-center align-items-center pb-5'>
      <div className="accordion accordion-flush fagQuest" id="accordionFlushExample" style={{backgroundColor:'#EBEDF3'}}>
        {FagData.map((question, index) => (
          <div className="accordion-item " key={index} style={{backgroundColor:'#EBEDF3'}}>
            <h2 className="accordion-header py-3" style={{backgroundColor:'#EBEDF3'}}  >
              <button
                className="accordion-button collapsed fs-16 d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapseOne-${index}`} 
                aria-expanded="false"
                aria-controls={`flush-collapseOne-${index}`} 
                style={{backgroundColor:'#EBEDF3'}}
                 
              >
                {question.ques}
              </button>
            </h2>
            <div
              id={`flush-collapseOne-${index}`} 
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-16 py-3">{question.ans}</div>
            </div>
          </div>
        ))}
     </div>
     </section>
     </section>
  );
};

export default Fags;