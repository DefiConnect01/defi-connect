import React from 'react';

const CoinPairSelector = ({amount,selectedCoin,handleAmountChange,handleCoinChange}) => {

  const cryptoData = [
    { name: "Select Coin", symbol: "Select Coin" },
    { name: "bitcoin", symbol: "BTC" },
    { name: "ethereum", symbol: "ETH" },
    { name: "litecoin", symbol: "LTC" },
    { name: "xrp", symbol: "XRP" },
    { name: "stellar", symbol: "XLM" },
    { name: "chainlink", symbol: "LINK" },
    { name: "polkadot", symbol: "DOT" },
    { name: "yearn.finance", symbol: "YFI" },
  ];

  return (
    <section className='d-flex flex-column gap-3 gap-md-0 flex-sm-row flex-1 '>
      <input
        type='number'
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        required
        style={{marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}
      />
      <div style={{marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}>
        {selectedCoin}
      </div>
      <select
        value={selectedCoin}
        onChange={handleCoinChange}
        required
        style={{border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}
      >
       {
        cryptoData.map((data,index)=>(
          <option value={data.name} key={index}>{data.symbol}</option>
        ))
       }
       
      </select>
    </section>
  );
};

export default CoinPairSelector;
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
