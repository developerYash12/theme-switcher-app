import React from 'react';
import MinimalLayout from '../layouts/MinimalLayout/MinimalLayout';
import ThemedLayout from '../layouts/ThemedLayout';

const About: React.FC = () => {
  return (
    <ThemedLayout>
    <h1>About Page</h1>
    <p>This is a sample paragraph in the current theme layout.</p>
    <button>Click Me</button>
  </ThemedLayout>
  );
};

export default About;
