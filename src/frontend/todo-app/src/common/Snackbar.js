import * as React from 'react';
import Stack from '@mui/material/Stack';
import {Snackbar as MaterialSnackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbar({text, severity, open,onClose}) {

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
    <MaterialSnackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {text}
      </Alert>
    </MaterialSnackbar>
  </Stack>
  );
}