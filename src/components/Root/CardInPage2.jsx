import { Typography, Box, Link } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { styled } from '@mui/system';
import { useBoundStore } from '../../store/store';
import { BlackLayer, BoxGapJCFlexEnd } from '../styledReusableComponents';
import { colors } from '../colors';
import { useTranslateStore } from '../../store/translateStore';
import { Navigate, useNavigate } from 'react-router-dom';

const CardCustom = styled(Box)(({ image }) => ({
  height: '120px',
  width: '100%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  position: 'relative',
}));

const TypographyZindex = styled(Typography)(({ color = '#fff' }) => ({
  zIndex: '20',
  color,
}));

function CardInPage2() {
  const selectedCard = useBoundStore(state => state.selectedCard);
  const lang = useTranslateStore(state => state.lang);

  if(lang=='gr'){
    var  hmeromhniaEkdromis='Ημερομηνία εκδρομής';
    var wraAnaxwrhshs= 'Ώρα αναχώρησης';
    var  epistrofh= 'Επιστροφή';
    var  plhrofories= 'ΠΛΗΡΟΦΟΡΙΕΣ';
     var monohmerh= 'Μονοήμερη Κρουαζιέρα';
    var polyhmerh= 'Πολυήμερη Κρουαζιέρα';
    var diathesimesTheseis = 'Διαθέσιμες θέσεις';
    var eksantlimenaEishthria= 'Εξαντλημένα εισιτήρια';
    var timh= 'Τιμή';
    var elikse =  'ΕΛΗΞΕ';
 

 
 }else if(lang=="en"){
  var apo='From';
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
    
 }else if(lang=="pl"){
  var apo='From';
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
   
 }else if(lang=="fr"){
  var apo='From';
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
   
 }else if(lang=="it"){
  var apo='From';
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
 }


  



  return (
    <CardCustom image={selectedCard?.image}>
      <BlackLayer>
        <Grid container sx={{ padding: '10px 20px' }} rowGap={1}>
          <Grid item xs={9}>
            <TypographyZindex variant="h6">
              {selectedCard?.descr} {apo} {selectedCard?.selectedPort.gr}
            </TypographyZindex>
          </Grid>
          <Grid item xs={3}>
            <BoxGapJCFlexEnd>
              <TypographyZindex variant="body1">
                {monohmerh}
              </TypographyZindex>
            </BoxGapJCFlexEnd>
          </Grid>
          <Grid item xs={12}>
            <TypographyZindex variant="h6">
              {hmeromhniaEkdromis}: {selectedCard?.departureDate}
            </TypographyZindex>
          </Grid>
          <Grid item xs={9}>
            <TypographyZindex variant="h6">
              {wraAnaxwrhshs}: {selectedCard.departureTime} -{' '}
              {selectedCard.arrivalTime}
            </TypographyZindex>
          </Grid>
          <Grid item xs={3}>
            <BoxGapJCFlexEnd>
              <TypographyZindex variant="body1">
                <Link href={selectedCard.url} sx={{ color: colors.yellow }}>
                  {plhrofories}
                </Link>
              </TypographyZindex>
            </BoxGapJCFlexEnd>
          </Grid>
        </Grid>
      </BlackLayer>
    </CardCustom>
  );

}

export default CardInPage2;
