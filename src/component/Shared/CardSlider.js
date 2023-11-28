import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {FaGreaterThan} from 'react-icons/fa'

function CardSlider({slide}) {
  return (
    <div>
      
          <img src={slide.title} alt='' className='img-fluid'/>
      
    </div>
  );
}

export default CardSlider;