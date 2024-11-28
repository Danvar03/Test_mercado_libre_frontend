import { render, screen, fireEvent } from '@testing-library/react';
import CustomInput from '../index';

describe('CustomInput', () => {
  test('renders the input component', () => {
    render(<CustomInput id="test-input" label="Test Input" />);
    const inputElement = screen.getByLabelText('Test Input');
    expect(inputElement).toBeInTheDocument();
  });
});
