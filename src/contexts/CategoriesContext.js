import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";

export const CategoriesContext = createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [choices, setChoices] = useState({
    categories: [],
    countries: [],
  });
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: countries }, { data: categories }] = await Promise.all([
          axiosRes.options("/products/"),
          axiosReq.get("/products/choices/"),
        ]);
        const countriesChoices = countries.actions?.POST.country.choices;
        setChoices((prev) => ({
          ...prev,
          categories: categories.CATEGORIES,
          countries: countriesChoices,
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
