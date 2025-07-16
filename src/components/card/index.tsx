import styles from './style.module.css';
import { Projeto } from '@/data';

export default function Card({ projeto }: { projeto: Projeto }) {

    return (
       <div className={styles.card}>
            <img src={projeto.srcImg} alt={projeto.title} />
            <h3>{projeto.title}</h3>
            <p><strong>{projeto.subtitle}</strong></p>
            <p>{projeto.description}</p>
            <p><em>{projeto.technologies}</em></p>
            <div>
            <a href={projeto.websiteURL} target="_blank" rel="noopener noreferrer">Website</a> |
            <a href={projeto.codeURL} target="_blank" rel="noopener noreferrer"> Code</a>
            </div>
        </div> 
    )
}