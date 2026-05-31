import { type ReactNode } from 'react';
import { Button, type ButtonProps } from '@mui/material';

type AppButtonProps = ButtonProps & {
  children: ReactNode;
};

export const AppButton = ({ children, ...props }: AppButtonProps) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};
