//import { useTheme } from '@/context/ThemeContext';
import { ScrollProvider } from '@/context/ScrollContext';
import MainContent from '@/components/MainContent';
//import styles from '@/styles/Main.module.css'

export default function Main(){
  //const { theme } = useTheme();

  return (
    <ScrollProvider>
      <MainContent />
  </ScrollProvider>
  );
};