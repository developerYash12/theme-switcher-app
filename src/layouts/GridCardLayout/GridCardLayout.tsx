import React from 'react';
import './GridCardLayout.css';

const GridCardLayout: React.FC<{ children?: React.ReactNode }> = () => {
  const cardData = [
    { id: 1, title: 'Card 1', text: 'This is a sample paragraph in the current theme layout.' },
    { id: 2, title: 'Card 2', text: 'This is a sample paragraph in the current theme layout.' },
    { id: 3, title: 'Card 3', text: 'This is a sample paragraph in the current theme layout.' },
    { id: 4, title: 'Card 4', text: 'This is a sample paragraph in the current theme layout.' },
    
    
    
  ];

  return (
    <div className="grid-layout-container">
      <div className="grid-layout-wrapper">
        <main className="grid-layout-main">
          <div className="grid-layout-grid">
            {cardData.map((card) => (
              <div className="grid-layout-card" key={card.id}>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                <button className="grid-layout-button">Click Me</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default GridCardLayout;
