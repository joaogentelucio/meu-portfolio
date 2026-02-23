import { useTheme } from '@/context/ThemeContext';
import themes from '@/themes'; 
import styles from './style.module.css';
import Switch from '../switch';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function HeaderComponent({ scrollToSection }: HeaderProps) {
  const { theme } = useTheme();
  const isDark = theme === themes.darkTheme;

  return (
    <header 
      className={styles.header} 
      style={{ 
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        color: theme.colors.text 
      }}
    >
      <div className={styles.logo}>
        <span style={{ color: '#6366f1' }}>J</span>oão.
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <button 
              className={styles.navButton} 
              onClick={() => scrollToSection('section1')}
              style={{ color: theme.colors.text }}
            >
              Início
            </button>
          </li>
          <li>
            <button 
              className={styles.navButton} 
              onClick={() => scrollToSection('section2')}
              style={{ color: theme.colors.text }}
            >
              Projetos
            </button>
          </li>
          <li>
            <button 
              className={styles.navButton} 
              onClick={() => scrollToSection('section3')}
              style={{ color: theme.colors.text }}
            >
              Sobre
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles.actions}>
        <Switch />
        <button className={styles.ctaButton}>
          Contato
          <span>↗</span>
        </button>
      </div>
    </header>
  );
};
