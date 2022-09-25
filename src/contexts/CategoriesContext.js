import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosRes } from "../api/axiosDefaults";

export const CategoriesContext = createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [choices, setChoices] = useState({
    categories: [],
    countries: [],
    rating: [],
  });
  const handleMount = async () => {
    try {
      const [{ data: products }, { data: ratings }] = await Promise.all([
        axiosRes.options("/products/"),
        axiosRes.options("/ratings/"),
      ]);

      const categories = products.actions?.POST.category.choices;
      const countries = products.actions?.POST.country.choices;
      const rating = ratings.actions?.POST.score.choices;
      setChoices({
        ...choices,
        categories: categories,
        countries: countries,
        ratings: rating,
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    handleMount();
  }, []);
  return (
    <CategoriesContext.Provider value={choices}>
      {children}
    </CategoriesContext.Provider>
  );
};
