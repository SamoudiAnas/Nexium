import React from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
}

const Transition = ({ children }: TransitionProps) => {
  const { pathname } = useRouter();

  return (
    <AnimatePresence mode="popLayout">
      <motion.main
        layout
        key={pathname}
        initial={{ opacity: 0.25, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.25, x: 200 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export { Transition };
