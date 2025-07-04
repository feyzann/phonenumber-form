import React from 'react';
import ApplicationForm from './components/form/ApplicationForm';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Application
      </Typography>
      <Typography variant="body1" gutterBottom>
        Fill out the information below
      </Typography>
      <ApplicationForm />
    </Container>
  );
}

export default App;
