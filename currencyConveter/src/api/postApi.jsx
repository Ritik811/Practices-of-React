import axios from "axios";


const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://v6.exchangerate-api.com/v6/${API_KEY}`;
const api = axios.create({
  baseURL: url,
});

export const fetchCurrencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};


