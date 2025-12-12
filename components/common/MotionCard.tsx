import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const MotionCard = ({ children }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
