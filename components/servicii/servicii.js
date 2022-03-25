import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { StyledSpan } from '../styled-components/styled-components';

function Servicii({ data }) {
  const {
    firstParagraph,
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
    serviceFive,
    serviceSix,
  } = data[0].fields;

  return (
    <Grid container>
      <Grid item container justifyContent="center" mb={5}>
        <Typography variant="h2" align="center">
          Servicii<StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
        </Typography>
      </Grid>
      <Grid item container gap={3} p={4}>
        <Typography variant="h5" align="left">
          {firstParagraph}
        </Typography>
      </Grid>
      <Grid item container gap={3} p={4}>
        <Grid item container>
          <Typography variant="h5">
            <StyledSpan>-</StyledSpan>
            {serviceOne}
            <StyledSpan>;</StyledSpan>
          </Typography>
        </Grid>
        <Grid item container>
          <Typography variant="h5">
            <StyledSpan>-</StyledSpan>
            {serviceTwo}
            <StyledSpan>;</StyledSpan>
          </Typography>
        </Grid>
        <Grid item container>
          <Typography variant="h5">
            <StyledSpan>-</StyledSpan>
            {serviceThree}
            <StyledSpan>;</StyledSpan>
          </Typography>
        </Grid>
        <Grid item container>
          <Typography variant="h5">
            <StyledSpan>-</StyledSpan>
            {serviceFour}
            <StyledSpan>;</StyledSpan>
          </Typography>
        </Grid>
        <Grid item container>
          <Typography variant="h5">
            <StyledSpan>-</StyledSpan>
            {serviceFive}
            <StyledSpan>;</StyledSpan>
          </Typography>
        </Grid>
        <Grid item container>
          <Typography variant="h5">
            <StyledSpan>-</StyledSpan>
            {serviceSix}
            <StyledSpan>;</StyledSpan>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Servicii;
