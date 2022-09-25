import React, { createContext, useContext, useState } from "react";

export const QueryContext = createContext();
export const SetQueryContext = createContext();

export const useQueryContext = () => useContext(QueryContext);
export const useSetQueryContext = () => useContext(SetQueryContext);

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <QueryContext.Provider value={{ query, hasLoaded }}>
      <SetQueryContext.Provider value={{ setQuery, setHasLoaded }}>
        {children}
      </SetQueryContext.Provider>
    </QueryContext.Provider>
  );
};
