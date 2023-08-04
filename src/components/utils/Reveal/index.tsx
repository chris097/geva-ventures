import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Reveal = ({ children }: any) => {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const mainContainer = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainContainer.start("visible")
        }
    }, [isInView, mainContainer]);

  return (
      <div ref={ref} className='relative overflow-hidden'>
          <motion.div
              variants={{
                  hidden: { opacity: 0, y: 90 },
                  visible: {opacity: 1, y: 0}
              }}
              initial="hidden"
              animate={mainContainer}
              transition={{duration: 0.75, delay: 0.33}}
          >{children}</motion.div>
      </div>
  )
}

export default Reveal;