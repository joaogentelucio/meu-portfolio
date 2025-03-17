import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import MainContent from '@/components/MainContent';

const App: React.FC = () => {
  return (
    <ThemeProvider>
        <MainContent />
    </ThemeProvider>
  );
};

export default App;