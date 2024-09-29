import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PricingContainer = ({
  children,
  key,
}: {
  children: ReactNode;
  key: string;
}) => {
  return (
    <div className="mt-[30px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3 2xl:gap-[30px]"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { PricingContainer };
