import { useQuery } from '@tanstack/react-query';
import { getPricing } from '../../api/pegasusApi';
import { useBoundStore } from '../../store/store';
import ErrorMessage from '../ErrorMessage';
import LoadingMessage from '../LoadingMessage';
import dayjs from 'dayjs';
import { BoxCenter } from '../styledReusableComponents';
import { Typography } from '@mui/material';
import { useTranslateStore } from '../../store/translateStore';
import { nextStepContext } from '../Context/NextStepContextProvider';
import React, { useState, useEffect } from 'react';

export default function FinalPrice() {
  const selectedDate = useBoundStore(state => state.selectedDate);
  const selectedCard = useBoundStore(state => state.selectedCard);
  const selectedPeople = useBoundStore(state => state.selectedPeople);
  const setFinalPrice = useBoundStore(state => state.setFinalPrice);
  const lang = useTranslateStore(state => state.lang);
  const { nextStepObj, setNextStepObj } = React.useContext(nextStepContext);

  const pushPassengers = (people, type) => {
    for (let i = 0; i < people; i++) {
      passengers.push({
        passengerClass: 1,
        passengerType: type,
      });
    }
  };

  const passengers = [];
  pushPassengers(selectedPeople.adults, 'AD');
  pushPassengers(selectedPeople.children, 'CH');
  pushPassengers(selectedPeople.infants, 'IN');


  if(lang=='gr'){
    var  telikitimi='Τελική Τιμή';
   var epomenoBima='Επόμενο Βήμα';
 
 }else if(lang=="en"){
   var  telikitimi='Final Price';
   var epomenoBima='Next Step';

    
 }else if(lang=="pl"){
  var  telikitimi='Final Price';
  var epomenoBima='Next Step';

 }else if(lang=="fr"){
  var  telikitimi='Final Price';
  var epomenoBima='Next Step';

   
 }else if(lang=="it"){
  var  telikitimi='Final Price';
  var epomenoBima='Next Step';

 }
  
  const postPricingObj = {
    cruise_id: selectedCard.cruise_id * 1,
    date: dayjs(selectedDate).format('YYYY-MM-DD'),
    time: selectedCard.departureTime,
    passengers,
    vessel: selectedCard.vessel,
    trip_code:selectedCard.trip_code,
    agency_name:nextStepObj.agency_name,
    agency_code:nextStepObj.agency_code,
    lang:lang,

  };
  const pricing = useQuery({
    queryKey: ['pricing', postPricingObj],
    queryFn: () => getPricing(postPricingObj),
    enabled: passengers.length > 0,
  });

  let content;
  if (pricing.isLoading) {
    content = <LoadingMessage />;
  }

  if (passengers.length === 0) {
    content = (
      <BoxCenter gap="5px" flexDirection="column">
        <Typography variant="h6">{telikitimi}</Typography>
        <Typography variant="h6">€{'0.00'}</Typography>
      </BoxCenter>
    );
  }

  if (pricing.isError) {
    content = <ErrorMessage message={pricing.error.message} />;
  }
  //case for passenger=1
  if (pricing.isSuccess) {
    let finalPrice = 0;
    let  pcicingArr=[]

    if(passengers.length==1 ){
      pcicingArr[0] = pricing.data
      pcicingArr.forEach(d => {
        finalPrice += d.price * 1;
      });
    }else {
      pricing.data.forEach(d => {
        finalPrice += d.price * 1;
      });
    }


    
    setFinalPrice(Math.round((finalPrice * 100) / 100).toFixed(2));
    content = (
      <BoxCenter gap="5px" flexDirection="column">
        <Typography variant="h6">{telikitimi}</Typography>
        <Typography variant="h6">
          €{Math.round((finalPrice * 100) / 100).toFixed(2)}
        </Typography>
      </BoxCenter>
    );

  }

  return <div>{content}</div>;
}
