import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import BorrowHeader from './BorrowHeader';

const Layout = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className='container-lg'>
      { pathName === '/borrow' || pathName === '/saving' || pathName === '/loan' ? <BorrowHeader /> : <NavBar />}

      <div style={{ flex: 1 }}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
