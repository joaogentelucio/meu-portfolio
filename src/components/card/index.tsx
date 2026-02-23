import styles from './style.module.css';
import { useTheme } from '@/context/ThemeContext';
import { Projeto } from '@/data';

export default function Card({ projeto }: { projeto: Projeto }) {
    const { theme } = useTheme();

    return (
       <div className={styles.card} style={{ backgroundColor: theme.colors.bottom }}>
            <h1 style={{ color: theme.colors.text }}>{projeto.title}</h1>
            <img src={projeto.srcImg} alt={projeto.title} />
            <h3 style={{ color: theme.colors.primary }}>{projeto.description}</h3>
            <p style={{ color: theme.colors.silver }}>{projeto.technologies}</p>
            <div className={styles.cardLinks} style={{ color: theme.colors.primary}}>
                <a href={projeto.websiteURL} target="_blank" rel="noopener noreferrer">Website</a> 
                <span style={{ color: theme.colors.text }}>|</span>
                <a href={projeto.codeURL} target="_blank" rel="noopener noreferrer"> Code</a>
            </div>
        </div> 
    )
}