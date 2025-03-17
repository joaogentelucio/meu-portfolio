//import { useTheme } from '@/context/ThemeContext';
import Header from "@/components/HeaderComponent";
import Type from "./Type";
import styles from '@/styles/Section1.module.css';
import logo from "@/assets/logo.png";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Section1({ scrollToSection }: HeaderProps) {
  //const { theme} = useTheme();

  return (
    <section id="section1" style={{ height: '100vh' }}>
      <Header scrollToSection={scrollToSection} />
      <div className={styles.homeSelection}>
        <div className={styles.homeContent}>
          <div className={styles.homeHeader}>
            <h1 className={styles.heading}>
              Olá!{" "}
              <span className={styles.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className={styles.headingName}>
              Eu sou
              <strong className={styles.mainName}> João Vitor</strong>
              
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </div>
          <div>
              <img
                src={logo}
                alt="Logo"
                className={styles.logo}
              />
            </div>
        </div>
      </div>
    </section>
  );
};