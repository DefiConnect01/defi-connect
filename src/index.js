import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './component/Shared/Layout';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Loading from './component/Shared/Loading';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BanditContextProvider, Campaign } from "@bandit-network/react";
 
const AppLazy = lazy(()=>import('./App'))
 const MarketPageLazy = lazy(()=>import('./component/pages/MarketPage'))
 const LoanPageLazy = lazy(()=>import('./component/pages/LoanPage.js'))
 const SavingPageLazy = lazy(()=>import('./component/pages/SavingPage.js'))
 
 const queryClent = new QueryClient()

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
  <QueryClientProvider client={queryClent}>
  <BanditContextProvider
  apiKey="ac2ad2eec4d44bb6820e463bf231a53e"
  cluster="mainnet"
>
<RouterProvider router={router}/>
</BanditContextProvider>
  </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
