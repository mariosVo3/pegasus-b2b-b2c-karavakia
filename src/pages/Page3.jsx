import { Typography, Box, Container, Link } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { styled } from '@mui/system';
import { useBoundStore } from '../store/store';
import {
  BoxCenter,
  BoxGapFlexStart,
} from '../components/styledReusableComponents';
import { colors } from '../components/colors';
import { useQuery } from '@tanstack/react-query';
import { getFinalize, getoptional } from '../api/pegasusApi';
import dayjs from 'dayjs';
import { Navigate, useNavigate } from 'react-router-dom';
import LoadingMessage from '../components/LoadingMessage';
import { useState } from 'react';
import { nextStepContext } from '../components/Context/NextStepContextProvider';
import React from 'react';
import { useTranslateStore } from '../store/translateStore';





function Page3() {
  const selectedCard = useBoundStore(state => state.selectedCard);
  const lang = useTranslateStore(state => state.lang);

  const { adults, children, infants } = useBoundStore(
    state => state.selectedPeople
  );
  const rsvr = useBoundStore(state => state.rsvr);
  const { nextStepObj, setNextStepObj } = React.useContext(nextStepContext);

  const setrsvr = useBoundStore(
    state => state.setrsvr
  );
  const navigate = useNavigate();


  const usersInformation = useBoundStore(state => state.usersInformation);
  let menus;

//here starts 
//const selectedCard = useBoundStore(state => state.selectedCard);
    const selectedDate = useBoundStore(state => state.selectedDate);
    const selectedPeople = useBoundStore(state => state.selectedPeople);
   // const usersInformation  = useBoundStore(state => state.usersInformation);
console.log(usersInformation)
  const pushPassengers = (people, type) => {
    let k=0;
    for (let i = 0; i < people; i++) {
      passengers.push({
        passengerClass: 1,
        passengerType: type,
        nationality:usersInformation[k].nationality,
        birthdate:usersInformation[k].dateOfBirth,
        sex:"F",
        last_name:usersInformation[k].lastName,
        first_name:usersInformation[k].firstName,
      });
      k=k+1;
    }
  };
  
  const passengers = [];
  pushPassengers(selectedPeople.adults, 'AD');
  pushPassengers(selectedPeople.children, 'CH');
  pushPassengers(selectedPeople.infants, 'IN');

    const postoptionalobj = {
        leader_name: usersInformation[0].lastName +" " + usersInformation[0].firstName,
        leader_phone:usersInformation[0].phoneNumber,
        leader_email:usersInformation[0].email,
        vessel_code:selectedCard.vessel_code,
        cruise_id:selectedCard.cruise_id,
        trip_code: selectedCard.trip_code,
        date: dayjs(selectedDate).format('YYYY-MM-DD'),
        time: selectedCard.departureTime,
        passengers:passengers,
        agency_name:nextStepObj.agency_name,
        agency_code:nextStepObj.agency_code,
        lang:lang,
    };

    const optional = useQuery({
        queryKey: ['optional', postoptionalobj],
        queryFn: () => getoptional(postoptionalobj),
    });
    if(optional.isFetched){
      setrsvr({
       PNR:optional.data.rsrv.PNR,
      
    });
    }

  if (optional.isLoading ) {
    menus = <LoadingMessage />;
  }
  else{
    navigate('/ekdosh-eisithriwn');

  }
  return (
    <>
      <Container maxWidth="xl">
        {menus}
      </Container>
      
    </>
  );
}

export default Page3;
