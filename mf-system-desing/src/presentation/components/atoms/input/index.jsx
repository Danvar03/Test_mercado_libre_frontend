import { TextField, InputAdornment } from '@mui/material';

const CustomInput = (props) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      error={props.error}
      helperText={props.helperText}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment:
          props.optional && props.icon ? (
            <InputAdornment position="end">{props.icon}</InputAdornment>
          ) : null,
      }}
    />
  );
};

export default CustomInput;
