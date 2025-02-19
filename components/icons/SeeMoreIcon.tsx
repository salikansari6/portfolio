import React from 'react';

const SeeMoreIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="31" stroke="currentColor" strokeWidth="2" />
      <path
        d="M15 30.5C14.1716 30.5 13.5 31.1716 13.5 32C13.5 32.8284 14.1716 33.5 15 33.5V30.5ZM50.0607 33.0607C50.6464 32.4749 50.6464 31.5251 50.0607 30.9393L40.5147 21.3934C39.9289 20.8076 38.9792 20.8076 38.3934 21.3934C37.8076 21.9792 37.8076 22.9289 38.3934 23.5147L46.8787 32L38.3934 40.4853C37.8076 41.0711 37.8076 42.0208 38.3934 42.6066C38.9792 43.1924 39.9289 43.1924 40.5147 42.6066L50.0607 33.0607ZM15 33.5H49V30.5H15V33.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SeeMoreIcon;
