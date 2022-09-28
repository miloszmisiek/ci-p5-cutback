import { useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";

const useFetch = () => {
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
  return choices;
};

export default useFetch;
