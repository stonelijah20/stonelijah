import React from 'react';
import './Prev.css'
import { motion } from 'framer-motion'

const Prev = () => {
  return <motion.div className='prev'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1, delay: 1.2}}
  ></motion.div>;
};

export default Prev;
