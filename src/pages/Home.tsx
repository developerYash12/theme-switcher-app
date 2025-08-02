import React from 'react';
import MinimalLayout from '../layouts/MinimalLayout/MinimalLayout';
import ThemedLayout from '../layouts/ThemedLayout';

const Home = () => {
  return (
    <ThemedLayout>
      <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>Welcome to the Home Page</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '600px' }}>
        This is a clean and minimal layout built using <strong>Theme 1</strong>. It features a simple sidebar, Arial font,
        and a soft grey background — ideal for dashboards or content-focused pages.
      </p>
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Click Me
      </button>
    </ThemedLayout>
  );
};

export default Home;
