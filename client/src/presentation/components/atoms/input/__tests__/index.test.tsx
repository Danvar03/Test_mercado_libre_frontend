import { render, screen } from '@testing-library/react';
import CustomInput from '../index';
import '@testing-library/jest-dom';
import { CustomInputProps } from '../type';
import { InputAdornment } from '@mui/material';

describe('CustomInput Component', () => {
  const defaultProps: CustomInputProps = {
    id: 'test-id',
    label: 'Buscar',
    placeholder: 'Ingresa producto',
    value: '',
    type: 'text',
    onChange: jest.fn(),
    error: false,
    helperText: '',
    optional: false,
    icon: <InputAdornment position="end">Icon</InputAdornment>,
  };

  it('renders without crashing', () => {
    render(<CustomInput {...defaultProps} />);
    expect(screen.getByLabelText('Buscar')).toBeInTheDocument();
  });
});
