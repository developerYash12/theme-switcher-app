import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import MinimalLayout from './MinimalLayout/MinimalLayout';
import SidebarLayout from '../layouts/SidebarLayout/SidebarLayout';
import GridCardLayout from './GridCardLayout/GridCardLayout';

const ThemedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  switch (theme.layout) {
    case 'sidebar':
      return <SidebarLayout>{children}</SidebarLayout>;
    case 'cards':
      return <GridCardLayout>{children}</GridCardLayout>;
    default:
      return <MinimalLayout>{children}</MinimalLayout>;
  }
};

export default ThemedLayout;
