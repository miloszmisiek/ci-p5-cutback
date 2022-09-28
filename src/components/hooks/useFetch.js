import { useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const useFetch = () => {
  const currentUser = useCurrentUser();
  const [choices, setChoices] = useState({
    categories: [],
    countries: [],
  });
  useEffect(() => {
    const handleMount = async () => {
      try {
        if (currentUser) {
          const [{ data: countries }, { data: categories }] = await Promise.all(
            [axiosRes.options("/products/"), axiosReq.get("/products/choices/")]
          );
          const countriesChoices = countries.actions?.POST.country.choices;
          setChoices((prev) => ({
            ...prev,
            categories: categories.CATEGORIES,
            countries: countriesChoices,
          }));
        } else {
          const { data } = await axiosReq.get("/products/choices/");
          setChoices((prev) => ({
            ...prev,
            categories: data.CATEGORIES,
          }));
        }
      } catch (err) {
        console.error(err);
      }
    };
    handleMount();
  }, [currentUser]);
  return choices;
};

export default useFetch;
