import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StrictMode>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
        {!isLoading && <App key="app" />}
      </AnimatePresence>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);
