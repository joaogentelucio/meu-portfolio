import { ScrollProvider } from '@/context/ScrollContext';
import Home from '@/pages/home';

export default function App() {
  return (
    <ScrollProvider>
      <Home />
    </ScrollProvider>
  );
};
