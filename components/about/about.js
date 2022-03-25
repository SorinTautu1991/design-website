import Image from 'next/image';
import Grid from '@mui/material/Grid';
import designer from '../../public/images/interior-designer.jpg';
import Typography from '@mui/material/Typography';
import { StyledSpan } from '../styled-components/styled-components';
import classes from '../../styles/globals.module.css';
import Box from '@mui/material/Box';

function About({ data }) {
  const { firstParagraph, secondParagraph } = data[0].fields;
  return (
    <Grid item container>
      <Grid item container justifyContent="center" mb={3}>
        <Typography variant="h2" align="center">
          Despre<StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
        </Typography>
      </Grid>
      <Grid container direction="row">
        <Grid item container xs={12} sm={6} p={5} justifyContent="center">
          <Box sx={{ display: 'block', width: '100%', height: '100%' }}>
            <Image
              src={designer}
              alt="photo"
              layout="responsive"
              className={classes.gimg}
              priority
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={6}
          direction="column"
          p={5}
          gap={2}
          justifyContent="space-around"
        >
          <Grid item container>
            <Typography variant="h5" align="left">
              {firstParagraph}
            </Typography>
          </Grid>
          <Grid item container>
            <Typography variant="h5" align="left">
              {secondParagraph}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
