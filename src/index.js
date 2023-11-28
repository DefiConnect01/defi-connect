import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './component/Shared/Layout';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MarketPage from './component/pages/MarketPage';
import LoanPage from './component/pages/LoanPage';
import SavingPage from './component/pages/SavingPage';
import Loading from './component/Shared/Loading';

 const AppLazy = lazy(()=>import('./App'))
 const MarketPageLazy = lazy(()=>import('./component/pages/MarketPage'))
 const LoanPageLazy = lazy(()=>import('./component/pages/LoanPage.js'))
 const SavingPageLazy = lazy(()=>import('./component/pages/SavingPage.js'))

 const router = createBrowserRouter(createRoutesFromElements(
  
        <Route path='/' element={<Layout/>}>
            <Route path='' element={
            <Suspense fallback={<Loading/>}>
            <AppLazy/>
            </Suspense>
            }/>
            <Route path='/borrow/' element={
              <Suspense fallback={<Loading/>}>
              <MarketPageLazy/>
              </Suspense>
            }/>
            <Route path='/loan' element={
              <Suspense fallback={<Loading/>}>
              <LoanPageLazy/>
              </Suspense>
            }/>
            <Route path='/saving' element={
              <Suspense fallback={<Loading/>}>
              <SavingPageLazy/>
              </Suspense>
            }/>
        </Route>
  
 ))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
