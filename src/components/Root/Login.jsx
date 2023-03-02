import React from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Typography from '@mui/material/Typography';
import LoginDialog from './LoginDialog';
import { Box } from '@mui/system';
import { nextStepContext } from '../Context/NextStepContextProvider';
import { getLogin } from '../../api/pegasusApi';
import { BoxCenter } from '../styledReusableComponents';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useBoundStore } from '../../store/store';
//import { ErrorMessage } from '../ErrorMessage';
//=====================================================
//Custom Styles - repeated

const typographyLikeButton = {
  color: '#0052b4',
  cursor: 'pointer',
};

//=====================================================
export default function Login() {
  const { nextStepObj, setNextStepObj } = React.useContext(nextStepContext);
  const error_msg_pass = useBoundStore(state => state.error_msg_pass);
  const seterror_msg_pass = useBoundStore(
    state => state.seterror_msg_pass
  );
  const [logindata, setlogindata] = React.useState()
  const [text, setText] = React.useState({
    syndesi: 'Σύνδεση',
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
  const [dialogLoginOpen, setDialogLoginOpen] = React.useState(false);

  //on click event from login
  const dialogLoginOpenHandler = () => {
    setDialogLoginOpen(true);
  };

  //on click event from LoginDialog component
  const dialogLoginCloseHandler = () => {
    setDialogLoginOpen(false);
    seterror_msg_pass(false)
  };
  useEffect(() => {
    setUserCredentials(null)
  }, []);

  const [userCredentials, setUserCredentials] = React.useState(null);
  const dialogLoginSubmitHandler = submitedUserCredentials => {
    setUserCredentials(submitedUserCredentials);
   
  };
  //==========================================================
  const postlogingOBJ={
    name_pass:userCredentials
  }
  /*
if(userCredentials){
  setNextStepObj({...nextStepObj, angecy_name: userCredentials.email , angecy_code: userCredentials.password})

}*/
  const login = useQuery({
    queryKey: ['login', postlogingOBJ],
    queryFn: () => getLogin(postlogingOBJ),
    enabled: !!userCredentials,

  });
if(login.isSuccess){ 
   seterror_msg_pass(login.data.success)  
}

if(userCredentials){
  if(error_msg_pass){
    setDialogLoginOpen(false);
    setNextStepObj({ ...nextStepObj, isLoggedIn: true , typedSearch: "", customerId:login.data?.id ,customerName:login.data?.name, agency_name:userCredentials?.email, agency_code:userCredentials?.password});
  }
}
 


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
            onClick={dialogLoginOpenHandler}
          >
            {text.syndesi}
          </Typography>

        </div>
      </Box>

      <LoginDialog
        open={dialogLoginOpen}
        onDialogLoginCloseHandler={dialogLoginCloseHandler}
        onDialogLoginSubmitHandler={dialogLoginSubmitHandler}
      />
    </>
  );
}