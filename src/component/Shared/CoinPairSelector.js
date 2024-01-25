import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { CoinPrice } from '../../service/CoinPrice';
import millify from 'millify';

const CoinPairSelector = ({
  amount,
  selectedCoin,
  handleAmountChange,
  handleCoinChange,
  coinSelect,
}) => {
  const { data: coin, error, isLoading } = useQuery({
    queryKey: ['coin'],
    queryFn: CoinPrice,
  });

  const selectedCoinData = coinSelect?.find((data) => data.name === selectedCoin);
  const conversionRate = selectedCoinData ? selectedCoinData.price : null;

  return (
    <div className="coin-pair-selector w-100 d-flex flex-column flex-md-row align-items-center gap-3 p-3 border rounded">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="selected-coin fs-5 mb-2 w-50">{selectedCoin}</div>
          <div className="">
            {conversionRate && (
              <div className="price fs-6 mb-2 text-nowrap">Price: {millify(conversionRate)}</div>
            )}
          </div>
          <select
            className="form-select fs-6 mb-2 w-50"
            value={selectedCoin}
            onChange={handleCoinChange}
            required
          >
            {coinSelect?.map((data, index) => (
              <option value={data.name} key={index}>
                {data.symbol}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default CoinPairSelector;





 //   <input
  //   type='number'
  //   placeholder="Enter amount"
  //   value={selectedCoin}
  //   // value={amount}
  //   onChange={handleAmountChange}
  //   // readOnly
  //   required
  //   style={{marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}
  // />
// {selectedCoin}

// <input
// type='number'
// placeholder='Enter amount'
// value={amount}
// onChange={handleAmountChange}
// required
// style={{
//   marginRight: '5px',
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   padding: '5px',
// }}
// />

// import { useQuery } from '@tanstack/react-query';
// import React, { useEffect } from 'react';
// import { CoinPrice } from '../../service/CoinPrice';
// import { useState } from 'react';

// const CoinPairSelector = ({amount,selectedCoin,handleAmountChange,handleCoinChange,coinSelect}) => {
//   const { data: coin, error, isLoading } = useQuery({
//     queryKey: ['coin'],
//     queryFn: CoinPrice,
//   });
//   console.log(coin)
  

//   return (
//     <section className='d-flex flex-column gap-3 gap-md-0 flex-sm-row flex-1 '>
      // <input
      //   type='number'
      //   placeholder="Enter amount"
      //   value={amount}
      //   onChange={handleAmountChange}
      //   required
      //   style={{marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}
      // />
//       <div style={{marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}>
//         {selectedCoin}
//       </div>
//       <select
//         value={selectedCoin}
//         onChange={handleCoinChange}
//         required
//         style={{border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}
//       >
//        {
//         coinSelect?.map((data,index)=>(
//           <option value={data.name} key={index}>{data.symbol}</option>
//         ))
//        }
       
//       </select>
//     </section>
//   );
// };

// export default CoinPairSelector;


// useEffect(()=>{setcoinDetails(coin?.data.coins)},[])
  // console.log(coinDetails)
  // const cryptoData = [
  //   { name: "Select Coin", symbol: "Select Coin" },
  //   { name: "bitcoin", symbol: "BTC" },
  //   { name: "ethereum", symbol: "ETH" },
  //   { name: "litecoin", symbol: "LTC" },
  //   { name: "xrp", symbol: "XRP" },
  //   { name: "stellar", symbol: "XLM" },
  //   { name: "chainlink", symbol: "LINK" },
  //   { name: "polkadot", symbol: "DOT" },
  //   { name: "yearn.finance", symbol: "YFI" },
  // ];
// [
//   "btc",
//   "eth",
//   "ltc",
//   "bch",
//   "bnb",
//   "eos",
//   "xrp",
//   "xlm",
//   "link",
//   "dot",
//   "yfi",
//   "usd",
//   "aed",
//   "ars",
//   "aud",
//   "bdt",
//   "bhd",
//   "bmd",
//   "brl",
//   "cad",
//   "chf",
//   "clp",
//   "cny",
//   "czk",
//   "dkk",
//   "eur",
//   "gbp",
//   "hkd",
//   "huf",
//   "idr",
//   "ils",
//   "inr",
//   "jpy",
//   "krw",
//   "kwd",
//   "lkr",
//   "mmk",
//   "mxn",
//   "myr",
//   "ngn",
//   "nok",
//   "nzd",
//   "php",
//   "pkr",
//   "pln",
//   "rub",
//   "sar",
//   "sek",
//   "sgd",
//   "thb",
//   "try",
//   "twd",
//   "uah",
//   "vef",
//   "vnd",
//   "zar",
//   "xdr",
//   "xag",
//   "xau",
//   "bits",
//   "sats"
// ]
