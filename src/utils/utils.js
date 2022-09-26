import jwtDecode from "jwt-decode";
import rates from "./rates.json";

export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};

export const ConvertCurrency = (currency, amount) => {
  let newPrice;
  for (const [key, value] of Object.entries(rates.rates)) {
    if (key === currency) {
      newPrice = amount * value;
    }
  }
  return newPrice;
};
