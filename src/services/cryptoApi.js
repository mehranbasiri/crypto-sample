import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "28f74f350bmsha88b56cf46cca35p1da932jsn3d8c021822f6",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
// const options = {
//     method: 'GET',
//     url: '',
//     params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         timePeriod: '24h',
//         'tiers[0]': '1',
//         orderBy: 'marketCap',
//         orderDirection: 'desc',
//         limit: '50',
//         offset: '0'
//     },
//
// }
