import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import PhoneInputField from './PhoneInput';

const ApplicationForm = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = data => {
    console.log(data);
    setSubmittedData(data);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Full Name"
          {...register("fullName", { required: "Full name is required" })}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          margin="normal"
        />
        <TextField
          fullWidth
          label="E-mail Address"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
          margin="normal"
        />

        <PhoneInputField
        value={watch("phone")}
        onChange={phone => setValue("phone", phone)}
        error={errors.phone?.message}
        />

        <input
          type="file"
          {...register("cv")}
          style={{ marginTop: '16px' }}
        />

        <TextField
          fullWidth
          label="Cover Letter"
          multiline
          rows={4}
          {...register("coverLetter")}
          margin="normal"
        />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          SUBMIT
        </Button>
      </Box>

      {submittedData && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Form Data:</Typography>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </Box>
      )}
    </>
  );
};

export default ApplicationForm;
