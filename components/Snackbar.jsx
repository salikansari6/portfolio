import React, { useContext, useEffect, useState } from "react";
import SnackbarContext from "../contexts/SnackbarContext";
const Snackbar = ({ title, message, status }) => {
  const { hideSnackbar, snackbar } = useContext(SnackbarContext);

  useEffect(() => {
    let timerId;
    if (snackbar && snackbar.status !== "pending") {
      timerId = setTimeout(() => {
        hideSnackbar();
      }, 3000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [snackbar]);

  const statusColors = (status) => {
    switch (status) {
      case "error":
        return "red";
      case "success":
        return "green";
      case "pending":
        return "blue";
    }
  };

  return (
    <div
      className="snackbar"
      style={{ background: statusColors(status) }}
      onClick={hideSnackbar}
    >
      <div className="snackbar__title">{title}</div>
      <div className="snackbar__message">{message}</div>
    </div>
  );
};

export default Snackbar;
