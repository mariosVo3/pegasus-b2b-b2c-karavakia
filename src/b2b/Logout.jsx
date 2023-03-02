import React from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { nextStepContext } from '../components/Context/NextStepContextProvider';
import { useBoundStore } from '../store/store';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
//import { ErrorMessage } from '../ErrorMessage';
//=====================================================
//Custom Styles - repeated

const typographyLikeButton = {
  color: '#0052b4',
  cursor: 'pointer',
};

//=====================================================
export default function Logout() {
  const { nextStepObj, setNextStepObj } = React.useContext(nextStepContext);
  //const error_msg_pass = useBoundStore(state => state.error_msg_pass);
 
  const seterror_msg_pass = useBoundStore(
    state => state.seterror_msg_pass
  );
  const [text, setText] = React.useState({
    syndesi: 'Αποσύνδεση',
  });

  //HANDLING LANGUAGE CHANGES
  /*React.useEffect(() => {
    switch (nextStepObj.locale) {
      case 'gr':
        setText({
          syndesi: 'Σύνδεση',
        });
        break;
      case 'uk':
        setText({
          syndesi: 'Login',
        });
        break;
      case 'fr':
        setText({
          syndesi: 'Connexion',
        });
        break;
      case 'pl':
        setText({
          syndesi: 'Zaloguj sie',
        });
        break;
      case 'it':
        setText({
          syndesi: 'Accedere',
        });
        break;
    }
  }, [nextStepObj.locale]);*/

  //Dialog login

  //on click event from login
  const logOutHandler = () => {
    setNextStepObj({
      ...nextStepObj,
      isLoggedIn: false,
      agency_name:'ten06',
      agency_code:'site1101',
      
    });
    seterror_msg_pass('')
    
  };

  //on click event from LoginDialog component

  


  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          paddingRight: '15px',
        }}
      >
        <PersonRoundedIcon
          sx={{ color: '#0052b4', fontSize: '20px', marginBottom: '3px' }}
        />

        <div>
          <Typography
            variant="subtitle2"
            sx={typographyLikeButton}
            onClick={logOutHandler}
          >
            {text.syndesi}
          </Typography>

        </div>
      </Box>
    </>
  );
}