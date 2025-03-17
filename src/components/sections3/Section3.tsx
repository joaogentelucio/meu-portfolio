import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import styles from '@/styles/Section3.module.css';


const Section3: React.FC = () => {
  const { theme} = useTheme();
  return (
    <section id="section3" style={{ height: '100vh', position: 'relative', color: theme.colors.text }}>
      <h2>Seção 3</h2>
      <footer className={styles.footer} style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <p>Copyright &copy; 2025 Gexxze.</p>
      </footer>
    </section>
  );
};

export default Section3;