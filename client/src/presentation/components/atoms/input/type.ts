export interface CustomInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string | number;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  optional?: boolean;
  icon?: React.ReactNode;
  step?: string;
  min?: string;
  max?: string;
}
