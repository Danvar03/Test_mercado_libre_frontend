import { TextField, InputAdornment } from '@mui/material';
import { CustomInputProps } from './type';

const CustomInput = (props: CustomInputProps) => {
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
      slotProps={{
        inputLabel: {
          shrink: true,
        },
        input: {
          endAdornment:
            props.optional && props.icon ? (
              <InputAdornment position="end">{props.icon}</InputAdornment>
            ) : null,
        },
      }}
    />
  );
};

export default CustomInput;
