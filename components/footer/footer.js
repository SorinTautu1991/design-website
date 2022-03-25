import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import facebook from '../../public/images/facebook.svg';
import instagram from '../../public/images/instagram.svg';
import pinterest from '../../public/images/pinterest.svg';
import Button from '@mui/material/Button';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import Link from '../link/link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledSpan } from '../styled-components/styled-components';

function Footer() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar
      position="static"
      sx={{
        background: 'transparent',
        borderTop: '1px solid rgba(56, 245, 197, 0.8)',
      }}
    >
      <Toolbar>
        <Grid container direction="row" sx={{ pt: 1, pb: 1 }}>
          <Grid
            item
            container
            direction="column"
            xs={12}
            sm={6}
            gap={1}
            mb={matchesSM ? 5 : 0}
          >
            <Grid item container direction="column" justifyContent="center">
              <Typography variant="h5" align="center">
                Contact
              </Typography>
            </Grid>
            <Grid item container direction="row" gap={1}>
              <Grid item container justifyContent="center">
                <Button
                  startIcon={
                    <PhoneIphoneIcon sx={{ fill: 'rgba(56, 245, 197, 0.8)' }} />
                  }
                >
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ textTransform: 'none' }}
                  >
                    07363263272
                  </Typography>
                </Button>
              </Grid>
              <Grid item container justifyContent="center" mb={1}>
                <Button
                  startIcon={
                    <EmailIcon sx={{ fill: 'rgba(56, 245, 197, 0.8)' }} />
                  }
                >
                  <Typography variant="h6" sx={{ textTransform: 'none' }}>
                    office@gmail.com
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              gap={2}
            >
              <Grid
                item
                component={'a'}
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                    transform: 'scaleX(1.07) scaleY(1.07)',
                    transition: '1s ease',
                  },
                }}
              >
                <Image
                  src={facebook}
                  alt="facebook icon"
                  width={25}
                  height={25}
                />
              </Grid>
              <Grid
                item
                component={'a'}
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                    transform: 'scaleX(1.07) scaleY(1.07)',
                    transition: '1s ease',
                  },
                }}
              >
                <Image
                  src={instagram}
                  alt="instagram icon"
                  width={25}
                  height={25}
                />
              </Grid>
              <Grid
                item
                component={'a'}
                href="https://www.pinterest.com"
                target="_blank"
                rel="noreferrer"
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                    transform: 'scaleX(1.07) scaleY(1.07)',
                    transition: '1s ease',
                  },
                }}
              >
                <Image
                  src={pinterest}
                  alt="pinterest icon"
                  width={25}
                  height={25}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6} gap={1}>
            <Grid item container justifyContent="center">
              <Typography variant="h5" align="center">
                Info
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <Button
                component={Link}
                href="/termeni"
                sx={{ textTransform: 'none' }}
              >
                <Typography align="center" variant="h6">
                  Termeni si conditii
                </Typography>
              </Button>
            </Grid>
            <Grid item container justifyContent="center">
              <Button
                component={Link}
                href="/cookies"
                sx={{ textTransform: 'none' }}
              >
                <Typography variant="h6" align="center">
                  Politica de cookies
                </Typography>
              </Button>
            </Grid>
            <Grid item container justifyContent="center">
              <Button
                component={'a'}
                href="https://www.webniac.ro"
                sx={{ textTransform: 'none' }}
                target="_blank"
                rel="noreferrer"
              >
                <Typography variant="h5">
                  Designed by WEBNIAC<StyledSpan>.</StyledSpan>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
