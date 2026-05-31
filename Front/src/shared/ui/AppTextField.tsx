import { TextField, type TextFieldProps } from '@mui/material';

export type AppTextFieldProps = TextFieldProps;

export const AppTextField = (props: AppTextFieldProps) => {
  return <TextField {...props} />;
};
