import React from 'react';
import dayjs from 'dayjs';
import { BoxCenter } from '../styledReusableComponents';
import { useBoundStore } from '../../store/store';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';
import { useTranslateStore } from '../../store/translateStore';
import { styled } from '@mui/system';
//CUSTOM COMPONENTS
const BoxOuterContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '50px 0',
  gap: '20px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

function SmallDate(props) {
  const selectedDate = useBoundStore(state => state.selectedDate);
  const lang = useTranslateStore(state => state.lang);

  const setSelectedDate = useBoundStore(state => state.setSelectedDate);
  const displayedDate = dayjs(selectedDate).format('DD/MM/YYYY');

  const dayMinusOne = () => {
    const today = dayjs(new Date());
    const dayBeforeSelectedDate = dayjs(selectedDate).subtract(1, 'day');
    const difference = dayBeforeSelectedDate.diff(today, 'day', true);
    if (difference >= -1) {
      setSelectedDate(dayjs(selectedDate).subtract(1, 'day'));
    }
  };

  const dayPlusOne = () => {
    setSelectedDate(dayjs(selectedDate).add(1, 'day'));
  };



  if(lang=='gr'){
    var  epilegmenhHmeromhnia='Επιλεγμένη ημερομηνία';
  
 
 }else if(lang=="en"){
  var  epilegmenhHmeromhnia='Selected date';

    
 }else if(lang=="pl"){
  var  epilegmenhHmeromhnia='Selected date';


 }else if(lang=="fr"){
  var  epilegmenhHmeromhnia='Selected date';

   
 }else if(lang=="it"){
  var  epilegmenhHmeromhnia='Selected date';


 }

  return (
    <BoxCenter>
      <BoxOuterContainer>
        <Typography variant="h6">{epilegmenhHmeromhnia}:</Typography>
        <BoxCenter gap="10px">
          <ArrowBackIosIcon onClick={dayMinusOne} />
          <Typography variant="h6">{displayedDate}</Typography>
          <ArrowForwardIosIcon onClick={dayPlusOne} />
        </BoxCenter>
      </BoxOuterContainer>
    </BoxCenter>
  );
}

export default SmallDate;
