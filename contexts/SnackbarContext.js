'use client';
import React, { createContext, useState } from "react";

const SnackbarContext = createContext({
  // snackbar: null,
  // showSnackbar: function (snackbarData) {},
  // hideSnackbar: function () {},
});

export const SnackbarContextProvider = ({ children }) => {
  const [activeSnackbar, setActiveSnackbar] = useState();

  const showSnackbarHandler = (snackbarData) => {
    setActiveSnackbar(snackbarData);
  };
  const hideSnackbarHandler = () => {
    setActiveSnackbar(null);
  };

  const context = {
    snackbar: activeSnackbar,
    showSnackbar: showSnackbarHandler,
    hideSnackbar: hideSnackbarHandler,
  };

  return (
    <SnackbarContext.Provider value={context}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
