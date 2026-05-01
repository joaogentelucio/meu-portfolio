import styles from './style.module.css';
import { useTheme } from '@/context/ThemeContext';
import { useScrollReveal } from "@/context/useScrollReveal";
import Section1 from '@/components/sections1';
import Section2 from '@/components/sections2';
import Section3 from '@/components/sections3';

export default function Home() {
  const { theme } = useTheme();
  useScrollReveal();
  
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.background} />
  
      <main className={styles.main} style={{ color: theme.colors.text }}>
        <Section1 scrollToSection={scrollToSection} />
        <Section2 />
        <Section3 />
      </main>
    </>
  );
};
