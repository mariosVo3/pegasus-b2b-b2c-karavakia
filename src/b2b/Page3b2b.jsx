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


const TypographyZindex = styled(Typography)(({ color = '#fff' }) => ({
  zIndex: '20',
  color,
}));

const BoxCyrcle = styled(Box)({
  backgroundColor: colors.yellow,
  height: '30px',
  width: '30px',
  padding: '30px',
  borderRadius: '1000%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid black',
});

function Page4() {
  const selectedCard = useBoundStore(state => state.selectedCard);
  const rsvr = useBoundStore(state => state.rsvr);
  const { adults, children, infants } = useBoundStore(
    state => state.selectedPeople
  );
  const finalPrice = useBoundStore(state => state.finalPrice);
  const usersInformation = useBoundStore(state => state.usersInformation);
  const totalPeople = adults + children + infants;
  const lang = useTranslateStore(state => state.lang);
  const selectedDate = useBoundStore(state => state.selectedDate);
  const selectedPeople = useBoundStore(state => state.selectedPeople);
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
const { nextStepObj, setNextStepObj } = React.useContext(nextStepContext);

const passengers = [];
pushPassengers(selectedPeople.adults, 'AD');
pushPassengers(selectedPeople.children, 'CH');
pushPassengers(selectedPeople.infants, 'IN');
  /*console.log(selectedCard);*/
  if(lang=='gr'){
    var  hmeromhniaEkdromis='Ημερομηνία εκδρομής';
    var pros='ΠΡΟΣ';
    var wraAnaxwrhshs= 'Ώρα αναχώρησης';
    var  epistrofh= 'Επιστροφή';
    var timi_eisitiriou= 'Κόστος'
    var  plhrofories= 'ΠΛΗΡΟΦΟΡΙΕΣ';
    var monohmerh= 'Μονοήμερη Κρουαζιέρα';
    var polyhmerh= 'Πολυήμερη Κρουαζιέρα';
    var diathesimesTheseis = 'Διαθέσιμες θέσεις';
    var eksantlimenaEishthria= 'Εξαντλημένα εισιτήρια';
    var timh= 'Τιμή';
    var elikse =  'ΕΛΗΞΕ';
    var eyxaristoume ='ΕΥΧΑΡΙΣΤΟΥΜΕ ΓΙΑ ΤΗΝ ΠΡΟΤΙΜΗΣΗ ΣΑΣ'
    var  analisikostous='Ανάλυση Κόστους';
    var eisitiria= 'Εισιτήρια Εκδρομής';
    var arithmos_eisitiriou= 'Α. Εισιτηρίου';
    var  telikitimi= 'Τελική Τιμή';
    var  adults1='Ενήλικοι ';
    var children1='Παιδιά';
    var infants1='Βρέφη';
    var onomaepitheto = "ΟΝΟΜΑΤΕΠΩΝΥΜΟ"
    var karavi = "Καράβι"
    var kratisi= 'Α. ΚΡΑΤΗΣΗΣ'
    var apo='ΑΠΟ'
    var arithmos='ΑΡΙΘΜΟΣ '
    var anthrwpoi= 'ΑΤΟΜΩΝ'
    var wra  = 'ΑΝΑΧΩΡΗΣΗΣ'
    var anaxwrisi = 'ΩΡΑ'
    var anaApo = 'ΑΝΑΧΩΡΗΣΗ'
    var perpli = 'Περισσότερες Πληροφορίες'
    var katevasePDF ='Kατεβάστε τα εισιτήριά σας'
    var stoixeia_ekdromis='Στοιχεία Εκδρομής'
    var prwto_onoma='Όνομα Επικοινωνίας'
    var email='Email'
    var til='Τηλέφωνο'
    var afixi='ΑΦΙΞΗ'
    var diarkeia='Διάρκεια '
    var wradeixe = 'ω'
    var lepta= 'λ';
    var option_eisitiria= 'Προθεσμία επιβεβαίωσης καταχώρησης:'
 }else if(lang=="en"){
  var stoixeia_ekdromis='Trip Details'
  var prwto_onoma='Leader Name'
  var email='Email'
  var til='Phone'
  var afixi='Arrival'
  var wradeixe = 'h'
  var lepta= 'm'
  var apo='From';
  var pros='TO';
  var  hmeromhniaEkdromis='Departure Date';
  var timi_eisitiriou= 'Price'
  var wraAnaxwrhshs= 'Departure Hour';
  var  epistrofh= 'Επιστροφή';
  var arithmos_eisitiriou= 'Ticket Number';
  var  plhrofories= 'INFORMATION';
   var monohmerh= 'One day Tour';
  var polyhmerh= 'Πολυήμερη Κρουαζιέρα';
  var diathesimesTheseis = 'Available  Seats';
  var eksantlimenaEishthria= 'Εξαντλημένα εισιτήρια';
  var timh= 'Τιμή';
  var elikse =  'OVER';
  var eyxaristoume ='THANK YOU FOR YOUR PREFERENCE'
  var  analisikostous='Cost analysis';
  var eisitiria= 'Trip Tickets';
  var  telikitimi= 'Final Price';
  var  adults1='Adults ';
  var children1='Children';
  var infants1='Infant'
  var onomaepitheto = "FULL NAME"
  var karavi = "VESSEL"
  var kratisi= 'RESERVATION'
  var arithmos='NUMBER OF'
  var anthrwpoi= 'PEOPLE'
  var wra  = 'TIME'
  var anaxwrisi = 'DEPARTURE'
  var anaApo = 'DEPARTURE FROM'
  var perpli = 'MORE INFORMATION'
  var katevasePDF ='Download your tickets'
  var option_eisitiria= 'Issue tickets until'

 
 }else if(lang=="pl"){
  var apo='From';
  var pros='TO';
  var  hmeromhniaEkdromis='Departure Date';
  var wraAnaxwrhshs= 'Departure Hour';
  var  epistrofh= 'Επιστροφή';
  var  plhrofories= 'INFORMATION';
   var monohmerh= 'One day Tour';
  var polyhmerh= 'Πολυήμερη Κρουαζιέρα';
  var diathesimesTheseis = 'Available  Seats';
  var eksantlimenaEishthria= 'Εξαντλημένα εισιτήρια';
  var timh= 'Τιμή';
  var elikse =  'OVER';
  var eyxaristoume ='THANK YOU FOR YOUR PREFERENCE'
  var  analisikostous='Cost analysis';
  var eisitiria= 'Trip Tickets';
  var  telikitimi= 'Final Price';
  var  adults1='Adults ';
  var children1='Children';
  var infants1='Infant'
  var onomaepitheto = "FULL NAME"
  var karavi = "VESSEL"
  var kratisi= 'RESERVATION'
  var arithmos='NUMBER OF'
  var anthrwpoi= 'PEOPLE'
  var wra  = 'TIME'
  var anaxwrisi = 'DEPARTURE'
  var anaApo = 'DEPARTURE FROM'
  var perpli = 'MORE INFORMATION'
  var option_eisitiria= 'Issue tickets until'

 }else if(lang=="fr"){
  var apo='From';
  var pros='TO';
  var  hmeromhniaEkdromis='Departure Date';
  var wraAnaxwrhshs= 'Departure Hour';
  var  epistrofh= 'Επιστροφή';
  var  plhrofories= 'INFORMATION';
   var monohmerh= 'One day Tour';
  var polyhmerh= 'Πολυήμερη Κρουαζιέρα';
  var diathesimesTheseis = 'Available  Seats';
  var eksantlimenaEishthria= 'Εξαντλημένα εισιτήρια';
  var timh= 'Τιμή';
  var elikse =  'OVER';
  var eyxaristoume ='THANK YOU FOR YOUR PREFERENCE'
  var  analisikostous='Cost analysis';
  var eisitiria= 'Trip Tickets';
  var  telikitimi= 'Final Price';
  var  adults1='Adults ';
  var children1='Children';
  var infants1='Infant'
  var onomaepitheto = "FULL NAME"
  var karavi = "VESSEL"
  var kratisi= 'RESERVATION'
  var arithmos='NUMBER OF'
  var anthrwpoi= 'PEOPLE'
  var wra  = 'TIME'
  var anaxwrisi = 'DEPARTURE'
  var anaApo = 'DEPARTURE FROM'
  var perpli = 'MORE INFORMATION'
  var option_eisitiria= 'Issue tickets until'


 }else if(lang=="it"){
  var apo='From';
  var pros='TO';
  var  hmeromhniaEkdromis='Departure Date';
  var wraAnaxwrhshs= 'Departure Hour';
  var  epistrofh= 'Επιστροφή';
  var  plhrofories= 'INFORMATION';
  var monohmerh= 'One day Tour';
  var polyhmerh= 'Πολυήμερη Κρουαζιέρα';
  var diathesimesTheseis = 'Available  Seats';
  var eksantlimenaEishthria= 'Εξαντλημένα εισιτήρια';
  var timh= 'Τιμή';
  var elikse =  'OVER';
  var eyxaristoume ='THANK YOU FOR YOUR PREFERENCE'
  var  analisikostous='Cost analysis';
  var eisitiria= 'Trip Tickets';
  var  telikitimi= 'Final Price';
  var  adults1='Adults ';
  var children1='Children';
  var infants1='Infant'
  var onomaepitheto = "FULL NAME"
  var karavi = "VESSEL"
  var kratisi= 'RESERVATION'
  var arithmos='NUMBER OF'
  var anthrwpoi= 'PEOPLE'
  var wra  = 'TIME'
  var anaxwrisi = 'DEPARTURE'
  var anaApo = 'DEPARTURE FROM'
  var perpli = 'MORE INFORMATION'
  var option_eisitiria= 'Issue tickets until'

 }
  
 
 const flag_final = useBoundStore(state => state.flag_final);
 const setflag_final = useBoundStore(
   state => state.setflag_final
 );

 
 const postFinalizeobj = {
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


  const finalize = useQuery({
    queryKey: ['optional', postFinalizeobj],
    queryFn: () => getoptional(postFinalizeobj),
    enabled: !!flag_final //optional Booking B2b
  });
const final_reserveB2BOptional = useBoundStore(state => state.final_reserveB2BOptional);
const setfinal_reserveB2BOptional = useBoundStore(
  state => state.setfinal_reserveB2BOptional
);

if(finalize.isFetched){

  setfinal_reserveB2BOptional(finalize.data)
  setflag_final(false)
}


/*
const linkSource = `data:application/pdf;base64,${finalize.data?.rsrv.pdf}`;
const downloadLink = document.createElement("a");
const fileName = "Pegasus Tickets" + postFinalizeobj.leader_name;*/

//downloadLink.click();


  const linkSource = `data:application/pdf;base64,${final_reserveB2BOptional.rsrv?.pdf}`;
  const downloadLink = document.createElement("a");
  const fileName = "Pegasus Tickets" + postFinalizeobj.leader_name;
  const downloadlink = () => {
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();

  };
  let content;
  content = final_reserveB2BOptional.passengers?.map(p => {   
    const {
      arrivalTime,
      departureTime,
      routeAnalysis: analysis,
      vessel,
    } = p;
     return(
      <Grid
      item
      container
      xs={12}
      justifyContent="center"
      sx={{ marginTop: '10px' }}
    >
      <Grid item xs={6}>
        <Typography variant="subtitle1">{onomaepitheto}:</Typography>
        <Typography variant="subtitle2">
          {p.PAX_DETAIL.FIRST_NAME } {p.PAX_DETAIL.LAST_NAME}
        </Typography>
      </Grid>
      
    </Grid>
    );
  });





if(final_reserveB2BOptional?.rsrv || (flag_final== false)){
 let Option_date=final_reserveB2BOptional.rsrv.OPTION_DATE.replace("T", " ")
  return (
    <Container maxWidth="xl">
      {usersInformation.length === 0 && <Navigate to="/" />}
      <BoxCenter sx={{ marginBottom: '50px' }}>
      </BoxCenter>
      <Grid container>
        <Grid
          item
          container
          xs={8}
          sx={{ padding: '15px', border: `1px solid ${colors.yellow}` }}
        >
          <Grid
            item
            xs={12}
            sx={{ paddingBottom: '5px', borderBottom: '1px solid black' }}
          >
            <BoxCenter>
              <Typography variant="body1">{eisitiria}</Typography>
            </BoxCenter>
          </Grid>
         
      
     
            <Grid
            item
            container
            xs={12}
            justifyContent="center"
            sx={{
              marginTop: '0px',
              paddingTop: '20px',
              borderTop: '1px solid black',
            }}
          >
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            sx={{ marginTop: '5px' }}
          >
            
            <Grid item xs={6}>
              <Typography variant="subtitle1">{prwto_onoma}:</Typography>
              <Typography variant="subtitle2">
                {usersInformation[0]?.firstName} {usersInformation[0]?.lastName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1"> {email}:</Typography>
              <Typography variant="subtitle2">
                {final_reserveB2BOptional.rsrv?.leader_email}
              </Typography>
            </Grid>
            <Grid item xs   sx={{ marginLeft: '50px' }}>
              <Typography variant="subtitle1"> {til}:</Typography>
              <Typography  variant="subtitle2">{final_reserveB2BOptional.rsrv?.leader_phonenumber}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            sx={{ marginTop: '20px' }}
          >
            
            <Grid item xs={6}>
              <Typography variant="subtitle1">{telikitimi}:</Typography>
              <Typography variant="subtitle2">
              €{finalPrice}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1"> {karavi}:</Typography>
              <Typography variant="subtitle2">
                {selectedCard?.vessel}
              </Typography>
            </Grid>
            <Grid item xs  sx={{ marginLeft: '50px' }}>
              <Typography variant="subtitle1"> {kratisi}:</Typography>
              <Typography  variant="subtitle2" sx={{  justifyContent:"center" }}>{final_reserveB2BOptional.rsrv?.PNR}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            sx={{ marginTop: '20px' }}
          >
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                {apo}: <strong>{selectedCard?.selectedPort.gr}</strong>
              </Typography>
              <Typography variant="subtitle1">
                {pros}: <strong>{selectedCard?.descr}</strong>
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ margin: '0px' }}>
              <Typography variant="subtitle1"> {hmeromhniaEkdromis}:</Typography>
              <Typography variant="subtitle2">
                {selectedCard?.departureDate}
              </Typography>
            </Grid>
          </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            sx={{
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '1px solid black',
            }}
          >
            <Grid item xs={6}>
              <BoxCenter flexDirection="column">
                <Typography variant="subtitle1" sx={{ color: colors.blue }}>
                  {arithmos}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: colors.blue }}>
                  {anthrwpoi}
                </Typography>
                <Typography variant="h6" sx={{ color: colors.yellow }}>
                  {totalPeople}
                </Typography>
              </BoxCenter>
            </Grid>
            <Grid item xs={6}>
              <BoxCenter flexDirection="column">
                <Typography variant="subtitle1" sx={{ color: colors.blue }}>
                 {anaxwrisi}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: colors.blue }}>
                  {wra}
                </Typography>
                <Typography variant="h6" sx={{ color: colors.yellow }}>
                  {selectedCard?.departureTime}
                </Typography>
              </BoxCenter>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xl={2} xs={6} sx={{ paddingLeft: '50px' }}>
          <BoxGapFlexStart gap="10px" sx={{ flexDirection: 'column' }}>
            {selectedCard?.analysis.map(r => {
              return (
                <BoxCenter gap="20px" key={JSON.stringify(r)}>
                  <BoxCyrcle >
                    <Typography variant="h6">{r.departureTime} </Typography>
                  </BoxCyrcle>
                  <Typography variant="h6">
                    {' '}
                    {anaApo} {apo} {r.origin}({r.diffHour}{wradeixe}-{r.diffMin}{lepta})
                  </Typography>
                 
                </BoxCenter>
                
              );
            })}
            
            
            <BoxCenter gap="20px">
              <BoxCyrcle>
                <Typography variant="h6">
                  {selectedCard?.arrivalTime}
                </Typography>
              </BoxCyrcle>
              <Typography variant="h6">
                {' '}
                {epistrofh} {selectedCard?.selectedPort.gr}
              </Typography>
            </BoxCenter>
          </BoxGapFlexStart>
          
          
        </Grid>
       
       
      </Grid>
      <BoxCenter sx={{ marginTop: '70px' ,}}>
        
        <Typography variant="h6"  style={{cursor:'pointer'}}>
          <p>{option_eisitiria} {Option_date}</p>
        </Typography>
      </BoxCenter>
    </Container>
  );
          }else{
            return(
              <Container maxWidth="xl">
                <LoadingMessage />;     
              </Container>
            )
          }
}

export default Page4;

