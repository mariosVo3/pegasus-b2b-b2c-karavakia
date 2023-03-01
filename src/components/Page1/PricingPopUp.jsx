import React from 'react';
import { colors } from '../colors';
import { styled } from '@mui/system';
import { BoxFlexSB } from '../styledReusableComponents';
import CounterPeople from './CounterPeople';
import FinalPrice from './FinalPrice';
import { Link } from 'react-router-dom';
import { useBoundStore } from '../../store/store';
import { Typography } from '@mui/material';
import { useTranslateStore } from '../../store/translateStore';
import { nextStepContext } from '../Context/NextStepContextProvider';



const NextStep = styled(Link)(({ totalpeople }) => ({
  textDecoration: 'none',
  cursor: `${totalpeople === 0 ? 'auto' : 'pointer'}`,
  padding: '10px 25px',
  backgroundColor: colors.yellow,
  color: '#000',
  border: '1px solid #000',
  ':hover': {
    backgroundColor: `${
      totalpeople === 0 ? colors.yellow : colors.yellow_light
    }`,
    color: `${totalpeople === 0 ? '#000' : colors.dark_gray2}`,
    borderColor: `${totalpeople === 0 ? '#000' : colors.dark_gray2}`,
  },
  
}));

const BoxFixed = styled('div')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '150px',
  backgroundColor: colors.light_gray2,
});

function PricingPopUp(props) {
  const { adults, children, infants } = useBoundStore(
    state => state.selectedPeople
  );
  const totalpeople = adults + children + infants;
  const lang = useTranslateStore(state => state.lang);
  const { nextStepObj, setNextStepObj } = React.useContext(nextStepContext);

  if(lang=='gr'){
     var  epilogiatomwn='Επιλογή Ατόμων ';
    var epomenoBima='Επόμενο Βήμα';
  
  }else if(lang=="en"){
    var  epilogiatomwn='Selection of People';
    var epomenoBima='Next Step';

     
  }else if(lang=="pl"){
    var  epilogiatomwn='Selection of People';
    var epomenoBima='Next Step';

  }else if(lang=="fr"){
    var  epilogiatomwn='Selection of People';
    var epomenoBima='Next Step';

    
  }else if(lang=="it"){
    var  epilogiatomwn='Selection of People';
    var epomenoBima='Next Step';

  }



   
  return (
    <BoxFixed>
      <BoxFlexSB sx={{ padding: '20px 40px' }}>
        <Typography variant="h5">{epilogiatomwn}</Typography>
        <CounterPeople />
        <FinalPrice />
        <NextStep
          to={totalpeople > 0 ? '/stoixeia-epivatwn' : '#'}
          totalpeople={totalpeople}
        >
          {epomenoBima}
        </NextStep>
      </BoxFlexSB>
    </BoxFixed>
  );
}

export default PricingPopUp;
