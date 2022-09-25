import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosRes } from "../api/axiosDefaults";

export const CategoriesContext = createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [choices, setChoices] = useState({
    categories: [],
    countries: [],
    currencies: [],
  });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosRes.options("/products/");
        const categories = data.actions?.POST.category.choices;
        const countries = data.actions?.POST.country.choices;
        const currencies = data.actions?.POST.price_currency.choices;
        setChoices((prev) => ({
          ...prev,
          categories: categories,
          countries: countries,
          currencies: currencies,
        }));
      } catch (err) {
        console.error(err);
      }
    };
    handleMount();
  }, []);
  return (
    <CategoriesContext.Provider value={choices}>
      {children}
    </CategoriesContext.Provider>
  );
};
