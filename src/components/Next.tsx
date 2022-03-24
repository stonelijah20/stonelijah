import React from 'react';
import './Next.css'
import { motion } from 'framer-motion'

const nextVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.2
    }
  }
}

const Next = () => {
  return <motion.div className="next-prev-icons"
    variants={nextVariants}
    initial="hidden"
    animate="visible"
  >
    
    <div className="next">
    </div>
  </motion.div>;
};

export default Next;
