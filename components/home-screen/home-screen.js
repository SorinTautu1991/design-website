import Grid from '@mui/material/Grid';
import Image from 'next/image';
import facebook from '../../public/images/facebook.svg';
import instagram from '../../public/images/instagram.svg';
import pinterest from '../../public/images/pinterest.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SofaAnimation from '../sofa-animation/sofa-animation';

function HomeScreen() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container justifyContent="center" mb={5}>
      <Grid item container xs={12} sm={12} mt={-10}>
        <SofaAnimation />
      </Grid>
      <Grid item container justifyContent="space-evenly" width="40vw" mt={5}>
        <Grid
          item
          sx={{
            '&:hover': {
              cursor: 'pointer',
              transform: 'scaleX(1.07) scaleY(1.07)',
              transition: '1s ease',
            },
          }}
          component={'a'}
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com"
        >
          <Image
            src={facebook}
            alt="facebook logo"
            width={matchesSM ? 30 : 50}
            height={matchesSM ? 30 : 50}
          />
        </Grid>
        <Grid
          item
          sx={{
            '&:hover': {
              cursor: 'pointer',
              transform: 'scaleX(1.07) scaleY(1.07)',
              transition: '1s ease',
            },
          }}
          component={'a'}
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com"
        >
          <Image
            src={instagram}
            alt="instagram logo"
            width={matchesSM ? 30 : 50}
            height={matchesSM ? 30 : 50}
          />
        </Grid>
        <Grid
          item
          sx={{
            '&:hover': {
              cursor: 'pointer',
              transform: 'scaleX(1.07) scaleY(1.07)',
              transition: '1s ease',
            },
          }}
          component={'a'}
          target="_blank"
          rel="noreferrer"
          href="https://www.pinterest.com"
        >
          <Image
            src={pinterest}
            alt="pinterest logo"
            width={matchesSM ? 30 : 50}
            height={matchesSM ? 30 : 50}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomeScreen;
