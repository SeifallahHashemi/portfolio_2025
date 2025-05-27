'use client';

import { socialLinks } from '@/components/Data/social';
import RefLink from '@/components/Shared/RefLink';
import { motion } from 'motion/react';
import React from 'react';

const Social = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    initial: { filter: 'blur(0.5rem)', opacity: 0, translateY: '1rem' },
    animate: {
      filter: 'blur(0)',
      opacity: 1,
      translateY: '0',
      transition: { duration: 0.4 },
    },
  };
  return (
    <motion.ul
      className={''}
      variants={containerVariants}
      initial={'initial'}
      animate={'animate'}
    >
      {socialLinks.map((item) => (
        <motion.li
          key={item.id}
          className={''}
          variants={itemVariants}
          initial={'initial'}
          animate={'animate'}
        >
          <RefLink href={item.url} target={'_blank'}>
            <item.icon />
            {item.name}
          </RefLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Social;
