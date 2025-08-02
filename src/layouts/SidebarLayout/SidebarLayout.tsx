import React from 'react';
import './SidebarLayoutv.css'
const Theme2Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="theme2-container">
    <aside className="theme2-sidebar">
      <ul>
        <li>🏠 Home</li>
        <li>📄 About</li>
        <li>📞 Contact</li>
      </ul>
    </aside>
  
    <main className="theme2-main">
      <h1 className="theme2-heading">About Page</h1>
      <p className="theme2-paragraph">
        This is a sample paragraph in the Theme 2 layout. It uses a serif font and lighter layout.
      </p>
      <button className="theme2-button">Click Me</button>
    </main>
  </div>
  
  );
};

export default Theme2Layout;
