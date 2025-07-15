import { useTheme } from '@/context/ThemeContext';
import themes from '@/themes'; 
import styles from './style.module.css';
import Switch from '../switch';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function HeaderComponent({ scrollToSection }: HeaderProps) {
  const { theme } = useTheme();

  return (
    <header className={styles.header} style={{ color: theme.colors.text }}>
     <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none',  }}>
          <li>
            <button onClick={() => scrollToSection('section1')} style={{ color: theme === themes.darkTheme ? theme.colors.text : theme.colors.primary }}>Início</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('section2')} style={{ color: theme === themes.darkTheme ? theme.colors.text : theme.colors.primary }}>Projetos</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('section3')} style={{ color: theme === themes.darkTheme ? theme.colors.text : theme.colors.primary }}>Sobre</button>
          </li>
        </ul>
      </nav>
      <Switch />
    </header>
  );
};
