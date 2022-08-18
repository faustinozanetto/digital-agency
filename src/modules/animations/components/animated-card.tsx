import React from 'react';
import { motion } from 'framer-motion';

interface IAnimatedCardProps {
  children: React.ReactNode;
  index: number;
  key: string;
}

const AnimatedCard: React.FC<IAnimatedCardProps> = (props) => {
  const { children, key, index, ...rest } = props;
  return (
    <motion.div
      key={key}
      initial="hidden"
      exit="hidden"
      animate="visible"
      whileInView="visible"
      transition={{
        type: 'spring',
        bounce: 0.35,
        duration: 1.25,
        delay: index * 0.1,
      }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 30 },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
