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
          <img src='src\assets\user.png' />
        </div>
        <h2>João Vitor</h2>
      </div>

      <div className={styles.sobreMim}>
        <h3>Sobre Mim</h3>
        <p>
          Minhas experiências são refletidas nos projetos que desenvolvi e disponibilizei no 
          GitHub, onde aplico na prática os conhecimentos adquiridos em cada stack.
          Atuo com desenvolvimento full stack, utilizando <strong>JavaScript</strong>, <strong>React.js</strong> e <strong>React Native</strong> para criar interfaces modernas e funcionais,
          além de <strong>C#</strong> com <strong>.NET</strong> para construção de <strong>APIs REST</strong> seguras e escaláveis. 
          Tenho compromisso com performance, boas práticas de código e foco na entrega de soluções eficientes de ponta a ponta.
        </p>
      </div>
      </div>

      <div className={styles.groupLink}>
        <span className={styles.linkSociais}>
          <a href='https://api.whatsapp.com/send?phone=5527997333212&text=Olá! Gostaria de saber mais sobre as soluções de tecnologia que vocês oferecem para empresas." ' target="_blank">
          <p className={styles.icon}><FaWhatsapp className={styles.whatsApp}/></p>
          </a>
          <a href='https://www.instagram.com/joaovitorazevedojv' target="_blank">
          <p className={styles.icon}><FaInstagram className={styles.instagram}/></p>
          </a>
          <a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-gentelucio-de-azevedo-102baa235' target="_blank">
          <p className={styles.icon}><FaLinkedin className={styles.linkedin}/></p>
          </a>
          <a href='https://github.com/joaogentelucio?tab=repositories' target="_blank">
          <p className={styles.icon}><FaGithub className={styles.gitHub}/></p>
          </a>
        </span>
      </div>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2025 Gexxze.</p>
      </footer>
    </section>
  );
};

export default Section3;