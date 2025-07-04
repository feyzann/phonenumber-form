import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { FormControl, FormHelperText } from '@mui/material';

const PhoneInputField = ({ value, onChange, error }) => {
  return (
    <FormControl fullWidth error={!!error} sx={{ mt: 2 }}>
      <PhoneInput
        country={'tr'}
        value={value}
        onChange={onChange}
        inputStyle={{ width: '100%' }}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default PhoneInputField;
