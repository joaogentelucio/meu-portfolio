import styles from './style.module.css';
import { useTheme } from '@/context/ThemeContext';
import { Projeto } from '@/data';

export default function Card({ projeto }: { projeto: Projeto }) {
    const { theme } = useTheme();

    return (
       <div className={styles.card} style={{ backgroundColor: theme.colors.bottom }}>
            <h1>{projeto.title}</h1>
            <img src={projeto.srcImg} alt={projeto.title} />
            <h3>{projeto.description}</h3>
            <p>{projeto.technologies}</p>
            <div className={styles.cardLinks}>
                <a href={projeto.websiteURL} target="_blank" rel="noopener noreferrer">Website</a> |
                <a href={projeto.codeURL} target="_blank" rel="noopener noreferrer"> Code</a>
            </div>
        </div> 
    )
}