import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import missionSliceReducer from "../redux/missions/missionSlice";

function renderWithProviders(
  ui,
  {
    preloadedState = {
      missions: [{
        id: 'testmission1',
        name: 'test1',
        descriptions: 'test mission',
        isReserved: false,
        wiki: '',
      }]
    },
    store = configureStore({ reducer: { missions: missionSliceReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  console.log(preloadedState);
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export default renderWithProviders;

// const renderWithProvider = (ui,
//   {
//     preloadedState={},
//     store = configureStore({
//       reducer: { missions: missionSliceReducer },
//       preloadedState: {
//         missions: [{
//           id: 'testmission1',
//           name: 'test1',
//           descriptions: 'test mission',
//           isReserved: false,
//           wiki: '',
//         }]
//       },
//     }),
//     ...renderOptions
//   } = {}) => {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }

//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

// export default renderWithProvider;