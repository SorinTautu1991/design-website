import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import Link from '../link/link';
import { useRouter } from 'next/router';

const BackToTop = ({ children }) => {
  const router = useRouter();
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 2900,
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

export default BackToTop;
