export const themes = {
  theme1: {
    name: 'theme1',
    background: '#ffffff',
    color: '#111111',
    font: 'sans-serif',
    layout: 'minimal',

    headerBackground: '#ffffff',
    headerColor: '#111111',
    cardBackground: '#f5f5f5',
    cardColor: '#111111',
  },

  theme2: {
    name: 'theme2',
    background: '#121212',
    color: '#f0f0f0',
    font: 'serif',
    layout: 'sidebar',

    headerBackground: '#1e1e1e',
    headerColor: '#ffffff',
    sidebarBackground: '#1a1a1a',
    cardBackground: '#1c1c1c',
    cardColor: '#f0f0f0',
  },

  theme3: {
    name: 'theme3',
    background: '#ffe4e1',
    color: '#333333',
    font: '"Pacifico", cursive',
    layout: 'cards',

    headerBackground: '#FF69B4',
    headerColor: '#ffffff',
    cardBackground: '#fff0f5',
    cardColor: '#333333',
  }
};

export type ThemeType = {
  name: string;
  background: string;
  color: string;
  font: string;
  layout: string;

  headerBackground: string;
  headerColor: string;
  cardBackground: string;
  cardColor: string;
  sidebarBackground?: string; // optional, only for theme2
};
