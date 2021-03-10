import React, { useContext } from "react";

const AppContext = React.createContext();

export function Context() {
	return useContext(AppContext);
}

export default function ContextProvider({ children }) {

  const value = {//contexts go hither!
  }

	return <AppContext.Provider value ={value}> {children}</AppContext.Provider>
}
