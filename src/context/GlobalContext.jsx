import React, { createContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  dentists: [],
  dentistDetail: null,
  favDentists: JSON.parse(localStorage.getItem('favDentists')) || [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'SET_DENTIST_DETAIL':
      return { ...state, dentistDetail: action.payload };
    case 'ADD_FAV':
      const updatedFavs = [...state.favDentists, action.payload];
      localStorage.setItem('favDentists', JSON.stringify(updatedFavs));
      return { ...state, favDentists: updatedFavs };
    default:
      return state;
  }
};

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };
