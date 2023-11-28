
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ButtonComponent = ({ content, click, className,link }) => {
  return (
    <Button className={`rounded-5 ${className}`} onClick={click} variant='primary'>
     <Link to={link}>
     {content}
     </Link>
    </Button>
  );
}

export default ButtonComponent;