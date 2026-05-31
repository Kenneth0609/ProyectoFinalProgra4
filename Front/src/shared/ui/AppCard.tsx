import { type ReactNode } from 'react';
import { Card, CardContent, Typography, type CardProps } from '@mui/material';

type AppCardProps = CardProps & {
  title?: string;
  children: ReactNode;
};

export const AppCard = ({ title, children, ...props }: AppCardProps) => {
  return (
    <Card {...props}>
      <CardContent>
        {title && (
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </CardContent>
    </Card>
  );
};
