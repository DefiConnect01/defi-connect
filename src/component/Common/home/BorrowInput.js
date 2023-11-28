import React, { useState, useEffect } from 'react';
import Template from '../../Shared/Template';
import { templatetHead } from '../../data';
import { Button } from 'react-bootstrap';
import CoinPairSelector from '../../Shared/CoinPairSelector';
import { BsArrowLeftRight } from 'react-icons/bs';
import { FaGreaterThan } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BorrowInput = () => {
  const [amount, setAmount] = useState('');
  const [amountPair, setAmountPair] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('');
  const [selectedCoinPair, setSelectedCoinPair] = useState('');
  const [conversionRate, setConversionRate] = useState(null);
  // const [order, setOrder] = useState([]);
  


  const BorrowInpuData = templatetHead[6];
  
  const { para, title } = BorrowInpuData.BorrowInputData;
  
     
  

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleAmountChangePair = (e) => {
    setAmountPair(e.target.value);
  };

  const handleCoinChange = (e) => {
    setSelectedCoin(e.target.value);
  };
  const handleCoinChangePair = (e) => {
    setSelectedCoinPair(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(`You selected ${amount} ${selectedCoin}`);
    console.log(`You selected ${amountPair} ${selectedCoinPair}`);
    
    let currency1API= "bitcoin,ethereum";
    let other='ethereum'
    let indexDate="01-01-2020";
    let coins=selectedCoin + ','+selectedCoinPair
    console.log(coins)
    let string = `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=usd`;
  
   await fetch(string)
   
    .then(resp => resp.json())
    .then(data =>{
     
      console.log(data)
      console.log(data[selectedCoinPair].usd)
      console.log(data[selectedCoin].usd)
      
      setAmount(data[selectedCoin].usd)
      setAmountPair(data[selectedCoinPair].usd)
    })
    // .then(data => console.log(data.market_data.current_price.usd,data))
   
  };


  return (
    <Template title={title} para={para}  className='container-fluid md-container'>
      <section className='d-flex flex-column align-items-center border border-3 border-light-subtle px-2 py-3 rounded-4'>
        <section className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-3'>
       
        
          <CoinPairSelector
            amount={amount}
            handleCoinChange={handleCoinChange}
            handleAmountChange={handleAmountChange}
            selectedCoin={selectedCoin}
          />
          <BsArrowLeftRight style={{ color: 'teal' }} className='fs-3' />
          <CoinPairSelector
            amount={amountPair}
            handleCoinChange={handleCoinChangePair}
            handleAmountChange={handleAmountChangePair}
            selectedCoin={selectedCoinPair}
          />
        </section>
        <Button className='fw-bold w-50 w-md-25 text-center' onClick={handleSubmit}>
         <Link to='/borrow' className='text-white'>
            BORROW NOW <FaGreaterThan/>
         </Link> 
        </Button>
        <div className="mt-3">
          {conversionRate && (
            <div>
              1 {selectedCoin} = {conversionRate} {selectedCoinPair}
            </div>
          )}
        </div>
      </section>
    </Template>
  );
}

export default BorrowInput;



// const res =await fetch( `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoin.toLowerCase()}&vs_currencies=${selectedCoinPair.toLowerCase()}`)
    // const res =await fetch(`https://api.coingecko.com/api/v3/coins/list/bitcoin/usd`)
    // const data = await res.json()
    // console.log(data)
    // let currency1API= "litecoin";

  // let string = "https://api.coingecko.com/api/v3/coins/" + currency1API +'/simple/supported_vs_currencies/' + other;
    //  let string = `https://api.coingecko.com/api/v3/simple/price?ids=${currency1API}&vs_currencies=usd`;
    //  let string = `https://api.coingecko.com/api/v3/simple/price?ids=${currency1API}}&vs_currencies=${other}`;
    //  let string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
    //! const string = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    //! const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`;
    //! const url = `https://api.coingecko.com/api/v3/simple/price?ids=${str}&vs_currencies=usd`;
    //! var str = coinIds.Join(",");
    // const string = `"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"`;
    // const string = `https://api.coingecko.com/api/v3/simple/price?ids=${currency1API}&vs_currencies=${other}`;
    // let string = "https://api.coingecko.com/api/v3/coins/" + currency1API ;
    // let string = "https://api.coingecko.com/api/v3/coins/" + currency1API +"/history?date="+indexDate+"&localization=false";

// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import Dropdown from 'react-dropdown';
// import { HiSwitchHorizontal } from 'react-icons/hi';
// import 'react-dropdown/style.css';
// import './App.css';

// function App() {
//   const [info, setInfo] = useState({});
//   const [input, setInput] = useState(0);
//   const [from, setFrom] = useState('ethereum');
//   const [to, setTo] = useState('bitcoin');
//   const [options, setOptions] = useState([]);
//   const [output, setOutput] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);


// useEffect(() => {
//   // Fetch the list of supported coins from Coingecko
//   const fetchCoinsList = async () => {
//     try {
//       const response = await Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      
//       const coinsList = response.data.map((coin) => coin.id);
//       setOptions(coinsList);
//     } catch (error) {
//       console.error('Error fetching supported coins list:', error);
//     }
//   };

//   fetchCoinsList();
// }, []);

// useEffect(() => {
//   // Fetch data from Coingecko for the selected coins
//   const fetchData = async () => {
//     try {
      
//       const response = await Axios.get(
//         `https://api.coingecko.com/a0pi/v3/simple/price?ids=${from}}&vs_currencies=${to}`
//       );
//       const data = response.data;
//       setInfo(data);
      
//     } catch (error) {
//       console.error('Error fetching data from Coingecko:', error);
//     }
//   };
// console.log(from);
// console.log(to);
//   fetchData();
// }, [from, to]);
// function convert() {
//     const fromRate = info[from]?.usd;
//     const toRate = info[to]?.usd;
//     const convertedAmount = (input / fromRate) * toRate;
//     setOutput(convertedAmount);
    
//   }


//   function flip() {
//     const temp = from;
//     setFrom(to);
//     setTo(temp);
//   }
  

//   return (
//     <div className="App">
     
//       <div className="aba">
      
//         <h1>Currency converter</h1>
//          <h3>Amount</h3>
//           <input
//             type="text"
//             placeholder="Enter the amount"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />

//           <h3>From</h3>
//           <Dropdown
//             options={options}
//             onChange={(e) => setFrom(e.value)}
//             value={from}
//             placeholder="From"
//           />
          
//           <HiSwitchHorizontal className='swap' size="25px" onClick={() => flip()} />
//           <h3>To</h3>
//           <Dropdown
//             options={options}
//             onChange={(e) => setTo(e.value)}
//             value={to}
//             placeholder="To"
//           />
          
//         <button className='botao' onClick={() => convert()}>Convert</button>
//         </div>
       
//         <div className='aba'>
//         <h2>Converted Amount:</h2>
//         <p>
//           {input} {from} = {output.toFixed(2)} {to}
//         </p>
//       </div>
//       </div>
    
//   );
// }

// export default App;

// useEffect(() => {
  //   if (selectedCoin && selectedCoinPair) {
  //     axios
  // .get(`https://api.coingecko.com/api/v3/simple/price`, {
  //   params: {
  //     ids: selectedCoin.toLowerCase(),
  //     vs_currencies: selectedCoinPair.toLowerCase(),
  //   },
  // })
  // .then((response) => {
  //   console.log('API Response:', response.data); // Log the entire response
  //   setConversionRate(response.data[selectedCoin.toLowerCase()][selectedCoinPair.toLowerCase()]);
  // })
  // .catch((error) => {
  //   console.error('Error fetching conversion rate:', error);
  // });
  //     axios
  //       .get(`https://api.coingecko.com/api/v3/simple/price`, {
  //         params: {
  //           ids: selectedCoin.toLowerCase(),
  //           vs_currencies: selectedCoinPair.toLowerCase(),
  //         },
  //       })
  //       .then((response) => {
  //         setConversionRate(response.data[selectedCoin.toLowerCase()][selectedCoinPair.toLowerCase()]);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching conversion rate:', error);
  //       });
  //   }
  // }, [selectedCoin, selectedCoinPair]);

  // useEffect(()=>{
  //   if(selectedCoin && selectedCoinPair){
  //     const res = fetch( `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoin.toLowerCase()}&vs_currencies=${selectedCoinPair.toLowerCase()}`)
  //   }
  // })
// import React, { useState } from 'react';
// import Template from '../../Shared/Template';
// import { templatetHead } from '../../data';
// import { Button } from 'react-bootstrap';
// import CoinPairSelector from '../../Shared/CoinPairSelector';
// import { BsArrowLeftRight } from 'react-icons/bs';
// import { FaGreaterThan } from 'react-icons/fa';

// const BorrowInput = () => {
//   const [amount, setAmount] = useState('');
//   const [amountPair, setAmountPair] = useState('');
//   const [selectedCoin, setSelectedCoin] = useState('');
//   const [selectedCoinPair, setSelectedCoinPair] = useState('');

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };
//   const handleAmountChangePair = (e) => {
//     setAmountPair(e.target.value);
//   };

//   const handleCoinChange = (e) => {
//     setSelectedCoin(e.target.value);
//   };
//   const handleCoinChangePair = (e) => {
//     setSelectedCoinPair(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(`You selected ${amount} ${selectedCoin}`);
//     console.log(`You selected ${amountPair} ${selectedCoinPair}`);

//     // Make API request for conversion rate
//     const url = `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoin.toLowerCase()}&vs_currencies=${selectedCoinPair.toLowerCase()}`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       const conversionRate = data[selectedCoin.toLowerCase()][selectedCoinPair.toLowerCase()];
//       console.log(`Conversion rate: ${conversionRate}`);
//       // Perform conversion calculation here using the conversionRate
//     } catch (error) {
//       console.error('Error fetching conversion rate:', error);
//     }
//   };

//   const [BorrowInputData] = templatetHead;
//   const { title, para } = BorrowInputData;

//   return (
//     <Template title={title} para={para}>
//       <section className='d-flex flex-column align-items-center border border-3 border-light-subtle px-2 py-3 rounded-4'>
//         <section className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-3'>
//           <CoinPairSelector amount={amount} handleCoinChange={handleCoinChange} handleAmountChange={handleAmountChange} selectedCoin={selectedCoin} />
//           <BsArrowLeftRight style={{ color: 'teal' }} className='fs-3' />
//           <CoinPairSelector amount={amountPair} handleCoinChange={handleCoinChangePair} handleAmountChange={handleAmountChangePair} selectedCoin={selectedCoinPair} />
//         </section>
//         <Button className='fw-bold w-50 text-center' onClick={handleSubmit}>
//           BORROW NOW <FaGreaterThan />
//         </Button>
//       </section>
//     </Template>
//   );
// };

// export default BorrowInput;



// import React, { useState, useEffect } from 'react';
// import Template from '../../Shared/Template';
// import { templatetHead } from '../../data';
// import { Button } from 'react-bootstrap';
// import CoinPairSelector from '../../Shared/CoinPairSelector';
// import { BsArrowLeftRight } from 'react-icons/bs';
// import { FaGreaterThan } from 'react-icons/fa';
// import axios from 'axios'; // Import Axios

// const BorrowInput = () => {
//   // ... Your existing code ...

//   const [conversionRate, setConversionRate] = useState(null);

//   useEffect(() => {
//     if (selectedCoin && selectedCoinPair) {
//       axios
//         .get(`https://api.coingecko.com/api/v3/simple/price`, {
//           params: {
//             ids: selectedCoin.toLowerCase(),
//             vs_currencies: selectedCoinPair.toLowerCase(),
//           },
//         })
//         .then((response) => {
//           setConversionRate(response.data[selectedCoin.toLowerCase()][selectedCoinPair.toLowerCase()]);
//         })
//         .catch((error) => {
//           console.error('Error fetching conversion rate:', error);
//         });
//     }
//   }, [selectedCoin, selectedCoinPair]);

//   // ... Your existing code ...

//   return (
//     <Template title={title} para={para}>
//       {/* ... Your existing JSX ... */}
//       <div className="mb-3">
//         {conversionRate && (
//           <div>
//             1 {selectedCoin} = {conversionRate} {selectedCoinPair}
//           </div>
//         )}
//       </div>
//       {/* ... Your existing JSX ... */}
//     </Template>
//   );
// };

// export default BorrowInput;



// import React, { useState } from 'react';
// import Template from '../../Shared/Template'
// import { templatetHead } from '../../data'
// import { Button } from 'react-bootstrap'
// import CoinPairSelector from '../../Shared/CoinPairSelector'
// import {BsArrowLeftRight} from 'react-icons/bs'
// import {FaGreaterThan} from 'react-icons/fa'


// const BorrowInput = () => {
//   const [amount, setAmount] = useState('');
//   const [amountPair, setAmountPair] = useState('');
//   const [selectedCoin, setSelectedCoin] = useState('');
//   const [selectedCoinPair, setSelectedCoinPair] = useState('');

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };
//   const handleAmountChangePair = (e) => {
//     setAmountPair(e.target.value);
//   };

//   const handleCoinChange = (e) => {
//     setSelectedCoin(e.target.value);
//   };
//   const handleCoinChangePair = (e) => {
//     setSelectedCoinPair(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`You selected ${amount} ${selectedCoin}`);
//     console.log(`You selected ${amountPair} ${selectedCoinPair}`);
//   };
//   const [BorrowInputData] =templatetHead
//   const {title,para} = BorrowInputData;

//   return (
//     <Template title={title} para={para}>
//       <section className='d-flex flex-column align-items-center border border-3 border-light-subtle px-2 py-3 rounded-4'>
//             <section className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-3'>
//             <CoinPairSelector amount={amount} handleCoinChange={handleCoinChange} handleAmountChange={handleAmountChange} selectedCoin={selectedCoin}/>
//             <BsArrowLeftRight style={{color:'teal'}} className='fs-3'/>
//             <CoinPairSelector amount={amountPair} handleCoinChange={handleCoinChangePair} handleAmountChange={handleAmountChangePair} selectedCoin={selectedCoinPair}/>
//             </section>
//             <Button className='fw-bold w-50 text-center' onClick={handleSubmit}>BORROW NOW <FaGreaterThan/></Button>
//       </section>
   
//     </Template>
//   )
// }

// export default BorrowInput;
