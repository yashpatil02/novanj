// Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <img src="./assets/images/Runningdog.gif" alt="Loading..." className="center" />
      <div className="loading-bar">
        <div className="loading-bar-progress"></div>
      </div>
    </div>
  );
}

export default Loader;
