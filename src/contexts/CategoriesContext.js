import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosRes } from "../api/axiosDefaults";

export const CategoriesContext = createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.options("/products/");
      const categories = data.actions?.POST.category.choices;
      setCategories(categories);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    handleMount();
  }, []);
  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};
