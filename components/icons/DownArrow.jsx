import React from "react";

const DownArrow = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" fill="#fffff" />
      <path
        d="M4 10L16.2667 23L27 10"
        stroke="black"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DownArrow;
