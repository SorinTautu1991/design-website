import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { StyledSpan } from '../styled-components/styled-components';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { useForm, ValidationError } from '@formspree/react';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    message: '',
    showAlert: false,
  });

  if (state.succeeded) {
    console.log('Success!');
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <Grid container mb={5}>
      <Grid item container justifyContent="center" mb={3}>
        <Typography variant="h2" align="center">
          Contact<StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '70vw' }}>
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="name">Nume</InputLabel>
            <Input
              sx={{
                fontSize: 36,
                ':after': { borderBottomColor: 'rgba(56, 245, 197, 0.8)' },
              }}
              type="text"
              name="nume"
              id="nume"
              value={formData.nume}
              onChange={handleChange}
              required
              autoComplete="false"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              sx={{
                fontSize: 36,
                ':after': { borderBottomColor: 'rgba(56, 245, 197, 0.8)' },
              }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              required
              autoComplete="false"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="message">Mesaj</InputLabel>
            <Input
              sx={{
                fontSize: 36,
                ':after': { borderBottomColor: 'rgba(56, 245, 197, 0.8)' },
              }}
              type="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={5}
              autoComplete="false"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <Button
              type="submit"
              sx={{
                width: '25%',
                height: '2.5rem',
                alignSelf: 'center',
                textTransform: 'none',
                fontSize: 26,
                '&:hover': { cursor: 'pointer', opacity: 0.6 },
                background:
                  'linear-gradient(35deg, rgba(233,243,196,1) 33%, rgba(120,219,219,1) 100%)',
                color: 'gray',
                fontWeight: 'bolder',
              }}
              disabled={state.submitting}
            >
              Trimite
            </Button>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact;
