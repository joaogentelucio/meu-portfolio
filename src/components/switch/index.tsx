import { useTheme } from '@/context/ThemeContext';
import themes from '@/themes'; 
import styles from './style.module.css';

export default function Switch() {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === themes.darkTheme;
    
    return (
        <label className={styles.switch} aria-label="Alternar tema">
            <input
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
                aria-checked={isDark}
            />
            <span className={styles.slider}>
                <span className={styles.icon}>{isDark ? '🌙' : '☀️'}</span>
            </span>
        </label>
    )
}