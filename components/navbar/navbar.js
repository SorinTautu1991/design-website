import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '../link/link';

function Navbar({ navLinks }) {
  return (
    <Grid
      container
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'space-between',
      }}
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
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  <Typography variant="h4">{title}</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Navbar;
