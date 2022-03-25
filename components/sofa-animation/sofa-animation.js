import { motion } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import room from '../../public/images/emptyRoom.jpg';
import cleanup from '../../public/images/emptyRoomCleanup.jpg';

function SofaAnimation() {
  return (
    <Box
      component="div"
      sx={{ position: 'relative', minWidth: '100vw', display: 'block' }}
    >
      <motion.img
        src={cleanup.src}
        alt="cleanup room"
        width="100%"
        height="100%"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { duration: 1.5, ease: [0.2, 0.3, 0.5, 0.8] },
        }}
        style={{ position: 'absolute', zIndex: 200 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.5, ease: [0.2, 0.3, 0.5, 0.8] },
        }}
      >
        <Image src={room} alt="room" layout="responsive" priority />
      </motion.div>
    </Box>
  );
}

export default SofaAnimation;
