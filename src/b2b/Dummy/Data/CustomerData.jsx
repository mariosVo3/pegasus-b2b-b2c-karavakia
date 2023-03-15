import React from 'react';
import customerData from '../dummyData/customerData.json';
import { useQuery } from '@tanstack/react-query';
import { getAgentOrders } from '../../../api/pegasusApi';
import { nextStepContext } from '../../../components/Context/NextStepContextProvider';
import dayjs from 'dayjs';

function CustomerData(props) {
  
  const { nextStepObj, setNextStepObj } = React.useContext(nextStepContext);

  React.useEffect(() => {
    //IIFE
    (async function () {
      try {
        // const response = await fetch('https://destinations.free.beeceptor.com');
        // //catch error 404
        // if (!response.ok) throw new Error('Problem getting events.');
        // const data = await response.json();

        props.sendCustomerData(customerData);
      } catch (err) {
        // TODO:
        //HAVE TO DISPLAY THE ERROR
        console.error(`${err} 💥💥💥`);
      }
    })();
  }, []);
  return <></>;
}

export default CustomerData;
