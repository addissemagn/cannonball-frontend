import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ name, label, required, value, onChange, isPassword }) => (
  <TextField
    name={name}
    variant="outlined"
    required={required}
    fullWidth
    id={name}
    label={label}
    value={value}
    onChange={onChange}
    autoComplete="off"
    key={name}
    type={isPassword ? "password" : ""}
  />
);

export default TextInput;
