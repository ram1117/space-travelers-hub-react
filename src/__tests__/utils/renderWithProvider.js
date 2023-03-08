import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import missionSlice from "../../redux/missions/missionSlice";

const renderWithProvider = (ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { listReducers: missionSlice },
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