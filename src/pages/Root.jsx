import { CssBaseline, Box } from '@mui/material';
import Flags from '../components/Root/Flags';
import LogoContainer from '../components/Root/LogoContainer';
import { colors } from '../components/colors';
import { BoxSBnoBP } from '../components/styledReusableComponents';
import Breadcrumb from '../components/Root/Breadcrumb';
import Login from '../components/Root/Login';
import NextStepContextProvider from '../components/Context/NextStepContextProvider';
import { useSearchParams } from 'react-router-dom';
import CustomerOverview from '../b2b/CustomerOverview';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CardInPage2 from '../components/Root/CardInPage2';
import React from 'react';
import CustomerData from '../b2b/Dummy/Data/CustomerData';

function Root() {
  const location = useLocation();
  const [cruises, setCruises] = React.useState(null);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [nextStepObj, setNextStepObj] = React.useState({
    isLoggedIn: false,
    agency_name:'ten06',
    agency_code:'site1101',
  });
  const [searchParams, setSearchParams] = useSearchParams({
    cr: null,
    bl: null,
    d: null,
    af: null,
    lg: null,
  });

  React.useEffect(() => {

  setNextStepObj({
    ...nextStepObj,
    affiliated: searchParams.get('af'),
    
  });
  
}, []);

const [customerData, setCustomerData] = React.useState(null);
  const receiveCustomerData = receivedCustomerData => {
    setCustomerData(receivedCustomerData);
  };

  return (

    <>
    <NextStepContextProvider
      value={{ nextStepObj: nextStepObj, setNextStepObj: setNextStepObj }}
    >
              {!nextStepObj.isLoggedIn && (
                <>
                
      <div>
        
        <CssBaseline />
        <BoxSBnoBP sx={{ backgroundColor: colors.yellow, padding: '5px 10px' }}>
          <Flags />
          <Login />
        </BoxSBnoBP>
        <LogoContainer />
        {location.pathname === '/stoixeia-epivatwn' && <CardInPage2 />}
        <Breadcrumb />
        <Box sx={{ marginTop: '30px' }}>
          <Outlet />
        </Box>
      </div>
      </>
              )}
                {nextStepObj.isLoggedIn && (
          <div>
            <CustomerData sendCustomerData={receiveCustomerData} />
            {customerData && (
              <CustomerOverview
                data={customerData}
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
                cruises={cruises}
                setCruises={setCruises}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            )}
          </div>
        )}
              
    </NextStepContextProvider>
    </>
  );

}

export default Root;
