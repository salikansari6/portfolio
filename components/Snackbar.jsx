import React, { useState } from "react";

const Snackbar = ({ title, message, status }) => {
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
    <div className="snackbar" style={{ background: statusColors(status) }}>
      <div className="snackbar__title">{title}</div>
      <div className="snackbar__message">{message}</div>
    </div>
  );
};

export default Snackbar;
