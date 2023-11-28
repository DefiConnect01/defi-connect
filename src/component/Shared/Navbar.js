import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavData } from '../data';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import whitePaper from './../asset/docs/Whitepaper_DeFi_Connect.pdf';
import Logo from '../asset/images/deficonnect.png'

function NavBar() {
  const [navColor, setNavColor] = useState('');
  const [downloadConfirmed, setDownloadConfirmed] = useState(false);

  const changeColor = async (e, id) => {
    setNavColor(id.id);
    if (id.name === 'Whitepaper') {
      let userConfirmation = window.confirm('You are about to download the Whitepaper. Do you want to proceed?');
      if (userConfirmation) {
        setDownloadConfirmed(true);
      } else {
        e.preventDefault();
        setDownloadConfirmed(false);
      }
    }
  };
  

  useEffect(() => {
    if (downloadConfirmed) {
      notify('You have downloaded the Whitepaper.');
    }
  }, [downloadConfirmed]);

  const notify = (message) => toast(message);

  return (
    <Navbar expand="sm" className="bg fixed-top " style={{ backdropFilter: 'blur(5px)' }}>
      <Container fluid='lg'>
        <Navbar.Brand as={NavLink} to="/">
          <img src={Logo} className='logo' alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ToastContainer />
            {NavData.map((nav, index) => (
              <a
                href={nav.name === 'Whitepaper' ? whitePaper: nav.path}
                download={nav.name === 'Whitepaper' ? true : false}
                key={nav.name + index}
                onClick={(e) => changeColor(e, nav)}
                style={{ color: navColor === index ? 'red' : 'blue' }}
                className='px-auto mx-auto mx-md-0 py-2 py-md-0 px-md-2'>
                {nav.name}
              </a>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;






// {
//   NavData.map((nav,index)=>(
//     <Nav.Link
//     key={index}
// as={NavLink}
// to={nav.path}
// style={({ isActive }) =>
//   isActive ? { color: "black" } : { color: "blue" }
// }
// >
// <a href={nav.path} >{nav.name}</a>
// </Nav.Link>
//   ))
// }