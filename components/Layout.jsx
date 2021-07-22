import React, { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Snackbar from "./Snackbar";
import SnackbarContext from "../contexts/SnackbarContext";

const Layout = ({ children }) => {
  const { snackbar } = useContext(SnackbarContext);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {snackbar && (
        <Snackbar
          title={snackbar.title}
          message={snackbar.message}
          status={snackbar.status}
        />
      )}
    </>
  );
};

export default Layout;
