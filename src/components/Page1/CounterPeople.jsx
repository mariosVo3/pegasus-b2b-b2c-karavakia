import { useQuery } from '@tanstack/react-query';
import { getDiscounts, getAvailability, getAges } from '../../api/pegasusApi';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { BoxCenter, BoxGap } from '../styledReusableComponents';
import { useBoundStore } from '../../store/store';
import dayjs from 'dayjs';
import ErrorMessage from '../ErrorMessage';
import LoadingMessage from '../LoadingMessage';
import { colors } from '../colors';
import React, { useState, useEffect } from 'react';
import { useTranslateStore } from '../../store/translateStore';
import { nextStepContext } from '../Context/NextStepContextProvider';
 


function CounterPeople() {
  const selectedDate = useBoundStore(state => state.selectedDate);
  const selectedCard = useBoundStore(state => state.selectedCard);
  const selectedPeople = useBoundStore(state => state.selectedPeople);
  const lang = useTranslateStore(state => state.lang);
  const { nextStepObj, setNextStepObj } = React.useContext(nextStepContext);
  const setSelectedPeople = useBoundStore(state => state.setSelectedPeople);
  const setSelectedPeoplePrice = useBoundStore(
    state => state.setSelectedPeoplePrice
  );




  if(lang=='gr'){
    var  adults='Ενήλικοι ';
   var children='Παιδιά';
   var infants='Βρέφη';
 
 }else if(lang=="en"){
  var  adults='Adults ';
  var children='Children';
  var infants='Infant'

    
 }else if(lang=="pl"){
  var  adults='Aduults ';
  var children='Children';
  var infants='Infant'
 }else if(lang=="fr"){
  var  adults='Adults ';
  var children='Children';
  var infants='Infant'
   
 }else if(lang=="it"){
  var  adults='Adults ';
  var children='Children';
  var infants='Infant'

 }
  

  const postAvailabilityObj = {
    cruise_id: selectedCard.cruise_id * 1,
    date: dayjs(selectedDate).format('YYYY-MM-DD'),
    time: selectedCard.departureTime,
    lang: lang,
  };
  const postDiscountsObj = {
    ...postAvailabilityObj,
    vessel: selectedCard.vessel,
    trip_code:selectedCard.trip_code,
    agency_name:nextStepObj.agency_name,
    agency_code:nextStepObj.agency_code,
    lang:lang,

  };

const postAgesObj= {
  cruise_id: selectedCard.cruise_id * 1,
  date: dayjs(selectedDate).format('YYYY-MM-DD'),
  time: selectedCard.departureTime,
  lang: lang,
}
  const ages = useQuery({
    queryKey: ['routes', postAgesObj],
    queryFn: () => getAges(postAgesObj),
  });
  const availability = useQuery({
    queryKey: ['availability', postAvailabilityObj],
    queryFn: () => getAvailability(postAvailabilityObj),
    enabled: !!selectedCard?.cruise_id,
  });


if(availability.data){
  selectedCard.trip_code=availability.data[0].trip_code
  selectedCard.vessel_code=availability.data[0].vessel_code
}
  const discounts = useQuery({
    queryKey: ['discounts', postDiscountsObj],
    queryFn: () => getDiscounts(postDiscountsObj),
    enabled: !!ages,
  });

  let content;
  if (ages.isLoading || availability.isLoading || discounts.isLoading) {
    content = <LoadingMessage />;
  }

  if (ages.isError) {
    content = <ErrorMessage message={ages.error.message} />;
  }
  if (availability.isError) {
    content = <ErrorMessage message={availability.error.message} />;
  }
  if (discounts.isError) {
    content = <ErrorMessage message={discounts.error.message} />;
  }
  if (ages.isSuccess && availability.isSuccess && discounts.isSuccess) {
    setSelectedPeoplePrice({
      typeOfPerson: 'AD',
      newPrice: Math.round((discounts.data[0].price * 100) / 100).toFixed(2),
    });
    setSelectedPeoplePrice({
      typeOfPerson: 'CH',
      newPrice: Math.round((discounts.data[1].price * 100) / 100).toFixed(2),
    });
    setSelectedPeoplePrice({
      typeOfPerson: 'IN',
      newPrice: Math.round((discounts.data[2].price * 100) / 100).toFixed(2),
    });
    content = ages.data.map(a => {
      return (
        <BoxCenter flexDirection="column" gap="5px" key={JSON.stringify(a)}>
          <Typography variant="subtitle1">
            {a.passengerType === 'AD'
              ? adults
              : a.passengerType === 'CH'
              ? children
              :  infants}
          </Typography>
          <BoxCenter
            gap="20px"
            sx={{
              backgroundColor: '#fff',
              padding: '5px 10px',
              border: `1px solid ${colors.yellow}`,
            }}
          >
            <RemoveIcon
              sx={{ cursor: 'pointer' }}
              onClick={() =>
                setSelectedPeople({ typeOfPerson: a.passengerType, by: -1 })
              }
            />

            <Typography variant="h5">
              {a.passengerType === 'AD'
                ? selectedPeople.adults
                : a.passengerType === 'CH'
                ? selectedPeople.children
                : selectedPeople.infants}
            </Typography>
            <AddIcon
              sx={{ cursor: 'pointer' }}
              onClick={() =>
                setSelectedPeople({ typeOfPerson: a.passengerType, by: 1 })
              }
            />
          </BoxCenter>
          <Typography variant="subtitle1">
            {a.passengerType === 'AD'
              ? `€${Math.round((discounts.data[0].price * 100) / 100).toFixed(
                  2
                )}`
              : a.passengerType === 'CH'
              ? `€${Math.round((discounts.data[1].price * 100) / 100).toFixed(
                  2
                )}`
              : `€${Math.round((discounts.data[2].price * 100) / 100).toFixed(
                  2
                )}`}
          </Typography>
        </BoxCenter>
      );
    });
  }

  return <BoxGap gap="80px">{content}</BoxGap>;
}

export default CounterPeople;
