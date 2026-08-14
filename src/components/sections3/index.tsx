import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import styles from './style.module.css';


const Section3: React.FC = () => {
  const { theme} = useTheme();
  return (
    <section id="section3" className={styles.container} style={{  color: theme.colors.text }}>
      <div className={styles.infoGroup}>
      <div className={styles.info}>
        <div className={styles.user}>
          <img src='https://raw.githubusercontent.com/joaogentelucio/meu-portfolio/refs/heads/main/src/assets/user.png' style={{  borderColor: theme.colors.bottom }} />
        </div>
        <h2 style={{  color: theme.colors.text }}>João Vitor</h2>
      </div>

      <div className={styles.sobreMim}>
        <h3>Sobre Mim</h3>
        <p style={{  color: theme.colors.text }}>
          Minhas experiências são refletidas nos projetos que desenvolvi e disponibilizei no 
          GitHub, onde aplico na prática os conhecimentos adquiridos em cada stack.
          Desenvolvo aplicações utilizando tecnologias como <strong>C#</strong>, <strong>.NET</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React.js</strong> e <strong>React Native</strong>, trabalhando com interfaces, <strong>APIs REST</strong> e bancos de dados. Busco aplicar boas práticas de código, organização e performance na construção de soluções completas.
        </p>
      </div>
      </div>

      <div className={styles.groupLink}>
        <span className={styles.linkSociais} style={{  backgroundColor: theme.colors.background }}>
          <a
            href={`https://api.whatsapp.com/send?phone=5527997333212&text=${encodeURIComponent(
              "Olá! Gostaria de saber mais sobre as soluções de tecnologia que vocês oferecem para empresas."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
            style={
              {
                backgroundColor: theme.colors.bottom,
                "--icon-color": theme.colors.text,
              } as React.CSSProperties
            }
          >
            <FaWhatsapp className={styles.whatsApp}/>
          </a>
          <a 
            href='https://www.instagram.com/joao.gentelucio' 
            target="_blank" 
            className={styles.icon}
            style={
              {
                backgroundColor: theme.colors.bottom,
                "--icon-color": theme.colors.text,
              } as React.CSSProperties
            }>
            <FaInstagram className={styles.instagram}/>
          </a>
          <a 
            href='https://www.linkedin.com/in/jo%C3%A3o-vitor-gentelucio-de-azevedo-102baa235' 
            target="_blank"
            className={styles.icon}
            style={
              {
                backgroundColor: theme.colors.bottom,
                "--icon-color": theme.colors.text,
              } as React.CSSProperties
            }
          >
            <FaLinkedin className={styles.linkedin}/>
          </a>
          <a 
            href='https://github.com/joaogentelucio?tab=repositories' 
            target="_blank"
            className={styles.icon}
            style={
              {
                backgroundColor: theme.colors.bottom,
                "--icon-color": theme.colors.text,
              } as React.CSSProperties
            }
          >
            <FaGithub className={styles.gitHub}/>
          </a>
        </span>
      </div>
      <footer className={styles.footer} style={{  color: theme.colors.text }}>
        <p>Copyright &copy; 2025 - Desenvolvido por João Vitor.</p>
      </footer>
    </section>
  );
};

export default Section3;
