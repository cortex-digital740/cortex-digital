import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const layoutVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

export const Layout = ({ children, showFooter = true }: LayoutProps) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      variants={layoutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </motion.div>
  );
};
