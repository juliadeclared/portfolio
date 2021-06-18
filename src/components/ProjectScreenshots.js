import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectScreenshots({ imageArr, cssClass }) {
  return imageArr.map((image) => (
    <motion.img
      src={process.env.PUBLIC_URL + image}
      alt="dashboard"
      className={cssClass}
      whileHover={{
        scale: 1.1,
        transition: {
          type: 'spring',
          delay: 0,
          duration: 5,
        },
      }}
    />
  ));
}
