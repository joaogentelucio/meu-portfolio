import { useTheme } from '@/context/ThemeContext';
import themes from '@/styles/themes'; 
import styles from '@/styles/Header.module.css'

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function HeaderComponent({ scrollToSection }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header} style={{ color: theme.colors.text }}>
     <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none',  }}>
          <li>
            <button onClick={() => scrollToSection('section1')} style={{ color: theme.colors.text }}>Início</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('section2')} style={{ color: theme.colors.text }}>Projetos</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('section3')} style={{ color: theme.colors.text }}>Sobre</button>
          </li>
        </ul>
      </nav>
      <label>
        <input
          type="checkbox"
          checked={theme === themes.darkTheme} // Define o estado do checkbox
          onChange={toggleTheme} // Alterna o tema quando clicado
        />
        {theme === themes.lightTheme ? 'Light Mode' : 'Dark Mode'}
      </label>
    </header>
  );
};
