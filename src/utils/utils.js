import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      // the reduce method add our new posts to the prevResource.results array
      results: data.results.reduce((acc, cur) => {
        // The some() method checks whether the  callback passed to it returns true for
        // at least one element in the array and  it stops running as soon as it does.
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc // some found a match, returning accumulator without adding new to it
          : [...acc, cur]; // some did not find match, spreading accumulator and adding new post (curr) to it
      }, prevResource.results),
    }));
  } catch (err) {
    // console.log(err)
  }
};

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
