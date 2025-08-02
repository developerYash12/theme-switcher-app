import React from 'react';
import './MinimalLayout.css'

const MinimalLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="home-layout-container">
    <main className="home-layout-main">
      <h1 className="home-layout-heading">Home Page</h1>
      <p className="home-layout-paragraph">
        This is a sample paragraph in the current theme layout. It follows Theme 1 styling.
      </p>
      <button className="home-layout-button">Click Me</button>
    </main>
  </div>
  
  );
};

export default MinimalLayout;
