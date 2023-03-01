import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useLocation } from 'react-router-dom';
import { BoxCenter } from '../styledReusableComponents';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { colors } from '../colors';
import { useTranslateStore } from '../../store/translateStore';

const LinkRouterCustom = styled(Link)(({ location, normalpath, to }) => ({
  textDecoration: 'none',
  cursor: `${to === '#' ? 'auto' : 'pointer'}`,
  ':link': {
    color: `${location === normalpath ? colors.blue_light : colors.yellow}`,
  },
  ':visited': {
    color: `${location === normalpath ? colors.blue_light : colors.yellow}`,
  },
  ':hover': {
    color: `${
      location === normalpath ? colors.blue_light2 : colors.yellow_light
    }`,
  },
  ':active': {
    color: `${
      location === normalpath ? colors.blue_light2 : colors.yellow_light
    }`,
  },
}));

function Breadcrumb() {
  const { pathname: location } = useLocation();
  const lang = useTranslateStore(state => state.lang);

  if(lang=='gr'){
     var  epilogiEkdromis='Επιλογή Εκδρομής';
     var stoixeiaEpivatwn= 'Στοιχεία Επιβατών';
     var  ekdosiEisitiriwn= 'Έκδοση Εισιτηρίων';
     
  
  }else if(lang=="en"){
    var  epilogiEkdromis='Choice of Excursion';
     var stoixeiaEpivatwn= 'Passenger Details';
     var  ekdosiEisitiriwn= 'Ticket issuance';
     
  }else if(lang=="pl"){
    var  epilogiEkdromis='Choice of Excursion';
    var stoixeiaEpivatwn= 'Passenger Details';
    var  ekdosiEisitiriwn= 'Ticket issuance';
    
  }else if(lang=="fr"){
    var  epilogiEkdromis='Choice of Excursion';
     var stoixeiaEpivatwn= 'Passenger Details';
     var  ekdosiEisitiriwn= 'Ticket issuance';
    
  }else if(lang=="it"){
    var  epilogiEkdromis='Choice of Excursion';
    var stoixeiaEpivatwn= 'Passenger Details';
    var  ekdosiEisitiriwn= 'Ticket issuance';
  }
   
   
   
  return (
    <BoxCenter
      gap="20px"
      sx={{ backgroundColor: colors.dark_gray, padding: '10px 50px' }}
    >
      <LinkRouterCustom to={'/'} location={location} normalpath={'/'}>
        <Typography variant="h6">{epilogiEkdromis}</Typography>
      </LinkRouterCustom>
      <ChevronRightIcon sx={{ fontSize: '30px', color: colors.dark_gray2 }} />
      {/* to={'/stoixeia-epivatwn'} */}
      <LinkRouterCustom
        to={'#'}
        location={location}
        normalpath={'/stoixeia-epivatwn'}
      >
        <Typography variant="h6">{stoixeiaEpivatwn}</Typography>
      </LinkRouterCustom>
      <ChevronRightIcon sx={{ fontSize: '30px', color: colors.dark_gray2 }} />
      {/* to={'/ekdosh-eisithriwn'} */}
      <LinkRouterCustom
        to={'#'}
        location={location}
        normalpath={'/ekdosh-eisithriwn'}
      >
        <Typography variant="h6">{ekdosiEisitiriwn}</Typography>
      </LinkRouterCustom>
    </BoxCenter>
  );
}

export default Breadcrumb;
