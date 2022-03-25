import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Link from '../link/link';

function SideDrawer({ navLinks }) {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Container
      sx={{
        mt: 'auto',
        mb: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {navLinks.map(({ title, path }, i) => {
        return (
          <Grid item key={`${title}${i}`}>
            <Grid container direction="column">
              <Grid item>
                <Button
                  component={Link}
                  href={path}
                  scroll={false}
                  sx={{ textTransform: 'none' }}
                >
                  <Typography variant="h4">{title}</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer('left', true)}
        sx={{
          color: `primary.main`,
          display: { xs: `inline`, md: `none` },
          height: 50,
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        // keepMounted
        PaperProps={{
          sx: (theme) => ({
            width: '60%',
            background: theme.palette.background,
          }),
        }}
        anchor="left"
        open={state.left}
        onOpen={toggleDrawer('left', true)}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </SwipeableDrawer>
    </>
  );
}

export default SideDrawer;
