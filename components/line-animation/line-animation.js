import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function LineAnimation() {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const variants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: 'easeInOut' },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={100}
      height={100}
      style={{
        enableBackground: 'new 0 0 200 200',
      }}
      xmlSpace="preserve"
      ref={ref}
    >
      <motion.path
        style={{
          stroke: 'rgba(56, 245, 197, 0.8)',
          strokeMiterlimit: 10,
          strokeWidth: 5,
        }}
        initial="hidden"
        animate={controls}
        variants={variants}
        d="M100 9.9V177.1"
      />
    </motion.svg>
  );
}

export default LineAnimation;
