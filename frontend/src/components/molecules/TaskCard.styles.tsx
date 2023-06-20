import { FC, ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';

interface TaskCardContainerProps extends BoxProps {
  children: ReactNode;
}

export const TaskCardContainer: FC<TaskCardContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        maxHeight: '200px',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </Box>
  );
};
