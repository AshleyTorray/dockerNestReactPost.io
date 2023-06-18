import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { strechedBoxStyles } from './StrechedBox.styles';

interface StrechedBoxProps {
  stack?: boolean | undefined;
  children: ReactNode;
}

const StrechedBox: FC<StrechedBoxProps> = ({ stack, children }) => {
  return (
    <Box
      sx={{
        ...strechedBoxStyles,
        flexDirection: stack ? 'column' : 'row',
        alignItems: stack ? 'inherit' : 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default StrechedBox;
