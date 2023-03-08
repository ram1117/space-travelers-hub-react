import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import missionSliceReducer from "../redux/missions/missionSlice";

const renderWithProvider = (ui,
  {
    preloadedState = {missions:[{
      id:'testmission1',
      name:'test1',
      descriptions:'test mission',
      isReserved:false,
      wiki:'',
    }]},
    store = configureStore({
      reducer: { missions: missionSliceReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProvider;