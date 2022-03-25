import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Link from '../components/link/link';

function Custom404() {
  return (
    <Grid container sx={{ minHeight: 350 }} justifyContent="center">
      <Grid item container justifyContent="center" mt={5}>
        <Typography variant="h3" align="center">
          OOPS...something went wrong
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Button
          component={Link}
          variant="contained"
          href="/"
          sx={{
            width: 200,
            height: 50,
            textTransform: 'none',
            fontSize: 25,
            color: 'red',
          }}
        >
          Go back
        </Button>
      </Grid>
    </Grid>
  );
}

export default Custom404;
