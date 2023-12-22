import { useQuery } from "@tanstack/react-query";
const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';
const referenceCurrencyUuid ='yhjMzLPhuIDl'
const headers= {
    'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
//   export async function CoinPrice() {
//     try {
//       const response = await fetch(baseUrl, { headers });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
export function CoinPrice() {
    return fetch(baseUrl, { headers })
      .then((response) => response.json())
      .then((data) => data.data.coins)
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }
  