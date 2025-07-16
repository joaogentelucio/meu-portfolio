import styles from './style.module.css';
import { projetos } from '@/data';
import Card from '@/components/card';

export default function Section2() {
  return (
    <section id="section2" className={styles.section}>
      <h2>Projetos</h2>
      <div className={styles.projectsGrid}>
        {projetos.map((projeto, index) => (
          <Card key={index} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}
