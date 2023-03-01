import { BoxCenter } from './styledReusableComponents';
import { Typography } from '@mui/material';

export default function ErrorMessage({ message }) {
  const errorMsg = (
    <BoxCenter sx={{ flexDirection: 'column' }}>
      
      <p>
        <Typography variant="h6">{message}</Typography>
      </p>
    </BoxCenter>
  );

  return <>{errorMsg}</>;
}
