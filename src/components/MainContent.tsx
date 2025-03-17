import { useTheme } from '@/context/ThemeContext';
import styles from '@/styles/Main.module.css';
import Section1 from '@/components/sections1/Section1';
import Section2 from '@/components/sections2/Section2';
import Section3 from '@/components/sections3/Section3';

export default function MainContent() {
  const { theme } = useTheme();
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.main} style={{ color: theme.colors.text }}>
      <Section1 scrollToSection={scrollToSection} />
      <Section2 />
      <Section3 />
    </main>
  );
};