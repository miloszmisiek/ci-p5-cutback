import { useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const useFetch = () => {
  const currentUser = useCurrentUser();
  console.log(currentUser);
  const [choices, setChoices] = useState({
    categories: [],
    countries: [],
  });
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: countries }, { data: categories }] = await Promise.all([
          currentUser ? axiosRes.options("/products/") : null,
          axiosReq.get("/products/choices/"),
        ]);
        const countriesChoices = countries.actions?.POST.country.choices;
        console.log(countriesChoices);
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
  }, [currentUser]);
  return choices;
};

export default useFetch;
