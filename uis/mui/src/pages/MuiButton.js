import * as React from 'react';
import Button from '@mui/material/Button';

export default function MuiButton() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}