'use client'
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
        return "bg-red-500";
      case "success":
        return "bg-primary";
      case "pending":
        return "bg-dark-lighter";
      default:
        return "bg-dark-lighter";
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full p-4 ${statusColors(status)} text-zinc-100 shadow-lg transform transition-transform duration-200 ease-in-out`}
      onClick={hideSnackbar}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-semibold">{title}</div>
        <div className="text-zinc-200">{message}</div>
      </div>
    </div>
  );
};

export default Snackbar;
