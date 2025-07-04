import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { FormControl, FormHelperText } from '@mui/material';

const placeholders = {
  tr: "5xx xxx xx xx",
  us: "(555) 555-5555",
  de: "1512 3456789",
  fr: "6 12 34 56 78",
  nl: "612345678",
};

const PhoneInputField = ({ value, onChange, error }) => {
  const [placeholder, setPlaceholder] = useState(placeholders["tr"]);

  return (
    <FormControl fullWidth error={!!error} sx={{ mt: 2 }}>
      <PhoneInput
        country={'tr'}
        value={value}
        onChange={(val, data) => {
          onChange(val);
          setPlaceholder(placeholders[data.countryCode] || "Enter number");
        }}
        countryCodeEditable={false}
        placeholder={placeholder}
        inputStyle={{ width: '100%' }}
        buttonStyle={{ border: 'none' }}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default PhoneInputField;
