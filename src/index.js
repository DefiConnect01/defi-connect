import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./component/Shared/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "./component/Shared/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BanditContextProvider } from "@bandit-network/react";
// import "@rainbow-me/rainbowkit/styles.css";

// import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiProvider } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

const AppLazy = lazy(() => import("./App"));
const MarketPageLazy = lazy(() => import("./component/pages/MarketPage"));
const LoanPageLazy = lazy(() => import("./component/pages/LoanPage.js"));
const SavingPageLazy = lazy(() => import("./component/pages/SavingPage.js"));
let secret='0a6bbd10ce0e5ef20f62596407593e45';
let client='bj5cIcvhztnA4gf0-yUMTr-Wo2MSHmky1NJpNccmH1IBPZRTA8NiIqU3Za_lX2et081J1-mvyPVqm_fkg1XzGA'

const queryClent = new QueryClient();
// export const config = getDefaultConfig({
//   appName: "Defi Conect",
//   projectId: "43ec0661be2bbc87d6ac8f1edfb9bcce",
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <Suspense fallback={<Loading />}>
            <AppLazy />
          </Suspense>
        }
      />
      <Route
        path="/borrow/"
        element={
          <Suspense fallback={<Loading />}>
            <MarketPageLazy />
          </Suspense>
        }
      />
      <Route
        path="/loan"
        element={
          <Suspense fallback={<Loading />}>
            <LoanPageLazy />
          </Suspense>
        }
      />
      <Route
        path="/saving"
        element={
          <Suspense fallback={<Loading />}>
            <SavingPageLazy />
          </Suspense>
        }
      />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  {/*  <WagmiProvider config={config}>*/}
  <QueryClientProvider client={queryClent}>
  
  {/* <RainbowKitProvider>*/}
  <BanditContextProvider
            apiKey="ac2ad2eec4d44bb6820e463bf231a53e"
            cluster="mainnet"
          >
            <RouterProvider router={router} />
          </BanditContextProvider>
        
        {/* </RainbowKitProvider>*/}
      </QueryClientProvider>
   {/* </WagmiProvider>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
