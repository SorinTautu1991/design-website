import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '../link/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppContext } from '../../context/context';
import Navbar from '../navbar/navbar';
import SideDrawer from '../sidedrawer/sidedrawer';
import BackToTop from '../back-to-top/back-to-top';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import logo from '../../public/images/Design-Elements-8.svg';

function Header() {
  const { toggleTheme, mode, services } = useAppContext();
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'transparent',
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container direction="row" id="#back-to-top-anchor">
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <IconButton
                  size="small"
                  edge="start"
                  aria-label="home"
                  disableRipple
                >
                  <Box component={Link} href="/" scroll={false}>
                    <Image src={logo} alt="logo" width={50} height={50} />
                  </Box>
                  <Typography variant="h5">Designer</Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton onClick={toggleTheme} sx={{ height: 40 }}>
                  {mode === 'light' ? (
                    <LightModeIcon sx={{ fill: '#FF0000' }} />
                  ) : (
                    <DarkModeIcon sx={{ fill: '#F0E68C' }} />
                  )}
                </IconButton>
              </Grid>
              <Grid item>
                <Navbar navLinks={services} />
                <SideDrawer navLinks={services} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <BackToTop>
        <Fab
          color="primary"
          size="large"
          aria-label="back to top"
          sx={{ '&:hover': { opacity: 0.7 } }}
        >
          <KeyboardArrowUpIcon sx={{ fill: 'rgba(56, 245, 197, 0.8)' }} />
        </Fab>
      </BackToTop>
    </>
  );
}

export default Header;
