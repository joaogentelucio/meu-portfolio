import { useEffect, useRef } from "react";
import styles from './style.module.css';
import { projetos } from '@/data';
import Card from '@/components/card';

export default function Section2() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  
  return (
    <section
      ref={ref}
      id="section2"
      className={`${styles.section} reveal`}
    >
      <h2>Projetos</h2>
      <div className={styles.projectsGrid}>
        {projetos.map((projeto, index) => (
          <Card key={index} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}
