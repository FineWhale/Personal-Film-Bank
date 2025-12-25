import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// this is the initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//creating context
export const GlobalContext = createContext(initialState);

//needed for compononents
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  // actions
  const addMovieToWL = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWL,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
