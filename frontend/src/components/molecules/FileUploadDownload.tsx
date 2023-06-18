import { FC } from 'react';

import { Box, Button, ButtonGroup } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadDownload: FC = () => {
  return (
    <Box>
      <ButtonGroup variant="outlined">
        <Button startIcon={<CloudDownloadIcon />}>Download</Button>
        <Button startIcon={<CloudUploadIcon />}>Upload</Button>
      </ButtonGroup>
    </Box>
  );
};

export default FileUploadDownload;
