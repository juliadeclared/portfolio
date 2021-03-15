import React, { createContext, useReducer } from "react";

//reducer
export const Reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_ABOUT":
      return {
        ...state, openAbout: true
      }
    default:
    return state
  }
}

const initialState = {
	openAbout: false,
	openStack: false,
	openProjects: false,
};

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store