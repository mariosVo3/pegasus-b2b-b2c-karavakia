import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useBoundStore } from '../../store/store';
import { styled } from '@mui/system';
import { colors } from '../colors';
import { BoxCenter } from '../styledReusableComponents';
import FinalPrice from '../Page1/FinalPrice';
import { useTranslateStore } from '../../store/translateStore';

const CustomCard = styled(Box)({
  border: `1px solid ${colors.blue}`,
  padding: '10px 20px',
});

export default function CostAnalyzer() {
  const selectedPeople = useBoundStore(state => state.selectedPeople);
  const lang = useTranslateStore(state => state.lang);

  const { adultsPrice, childrenPrice, infantsPrice } = useBoundStore(
    state => state.selectedPeoplePrice
  );

  if(lang=='gr'){
    var  analisikostous='Ανάλυση Κόστους';
    var eisitiria= 'Εισιτήρια Εκδρομης';
    var  telikitimi= 'Τελική Τιμή';
    var  adults1='Ενήλικοι';
    var children1='Παιδιά';
    var infants1='Βρέφη';
 
 }else if(lang=="en"){
  var  analisikostous='Cost analysis';
  var eisitiria= 'Trip Tickets';
  var  telikitimi= 'Final Price';
  var  adults1='Adults ';
  var children1='Children';
  var infants1='Infant'

    
 }else if(lang=="pl"){
  var  analisikostous='Cost analysis';
  var eisitiria= 'Trip Tickets';
  var  telikitimi= 'Final Price';
  var  adults1='Adults ';
  var children1='Children';
  var infants1='Infant'

 }else if(lang=="fr"){
  var  analisikostous='Cost analysis';
  var eisitiria= 'Trip Tickets';
  var  telikitimi= 'Final Price';
  var  adults1='Adults ';
  var children1='Children';
  var infants1='Infant'

 }else if(lang=="it"){
  var  analisikostous='Cost analysis';
    var eisitiria= 'Trip Tickets';
    var  telikitimi= 'Final Price';
    var  adults1='Adults ';
  var children1='Children';
  var infants1='Infant'

 }
  

  /*
  const { adults, children, infants } = useBoundStore(
    state => state.selectedPeople
  );
  */

  const finalPrice = useBoundStore(state => state.finalPrice);

  if((selectedPeople.adults>0) && (selectedPeople.children>0) && (selectedPeople.infants>0)){

    return (
      <CustomCard>
        <Grid container alignItems="center" sx={{ padding: '10px 50px' }}>
          <Grid item xs={12}>
            <Typography variant="h6">{analisikostous}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{eisitiria}</Typography>
          </Grid>

          <Grid item xs={12} container sx={{ marginTop: '20px' }}>
            <Grid item xs={4}>
              
              {adults1}:
            </Grid>
            <Grid item xs={4}>
              x{selectedPeople.adults}
            </Grid>
            <Grid item xs={4}>
            €{adultsPrice}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            {children1}:
          </Grid>
          <Grid item xs={4}>
            x{selectedPeople.children}
          </Grid>
          <Grid item xs={4}>
          €{childrenPrice}
          </Grid>
          <Grid item xs={4}>
            {infants1}:
          </Grid>
          <Grid item xs={4}>
            x{selectedPeople.infants}
          </Grid>
          <Grid item xs={4}>
          €{infantsPrice}
          </Grid>
          <Grid item xs={12} container sx={{ marginTop: '50px' }}>
            <Grid item xs={8}>
              <Typography variant="h6">{telikitimi}:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6"> ${finalPrice}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CustomCard>
    );
  }else if ((selectedPeople.adults>0) && (selectedPeople.children>0) ){
    return (
      <CustomCard>
        <Grid container alignItems="center" sx={{ padding: '10px 50px' }}>
          <Grid item xs={12}>
            <Typography variant="h6">{}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{eisitiria}</Typography>
          </Grid>

          <Grid item xs={12} container sx={{ marginTop: '20px' }}>
            <Grid item xs={4}>
              
              {adults1}:
            </Grid>
            <Grid item xs={4}>
              x{selectedPeople.adults}
            </Grid>
            <Grid item xs={4}>
            €{adultsPrice}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            {children1}:
          </Grid>
          <Grid item xs={4}>
            x{selectedPeople.children}
          </Grid>
          <Grid item xs={4}>
          €{childrenPrice}
          </Grid>
         
          <Grid item xs={12} container sx={{ marginTop: '50px' }}>
            <Grid item xs={8}>
              <Typography variant="h6">{telikitimi}:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">€{finalPrice}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CustomCard>
    );
  }else if((selectedPeople.adults>0) && (selectedPeople.infants>0)){
    return(
      <CustomCard>
          <Grid container alignItems="center" sx={{ padding: '10px 50px' }}>
            <Grid item xs={12}>
              <Typography variant="h6">{analisikostous}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{eisitiria}</Typography>
            </Grid>

            <Grid item xs={12} container sx={{ marginTop: '20px' }}>
              <Grid item xs={4}>
                
                {adults1}:
              </Grid>
              <Grid item xs={4}>
                x{selectedPeople.adults}
              </Grid>
              <Grid item xs={4}>
              € {adultsPrice}
              </Grid>
            </Grid>
            
            <Grid item xs={4}>
              {infants1}:
            </Grid>
            <Grid item xs={4}>
              x{selectedPeople.infants}
            </Grid>
            <Grid item xs={4}>
            €{infantsPrice}
            </Grid>
            <Grid item xs={12} container sx={{ marginTop: '50px' }}>
              <Grid item xs={8}>
                <Typography variant="h6">{telikitimi}:</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6"> €{finalPrice}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CustomCard>
    );
  }
  
  else {
    return (
      <CustomCard>
        <Grid container alignItems="center" sx={{ padding: '10px 50px' }}>
          <Grid item xs={12}>
            <Typography variant="h6">{analisikostous}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{eisitiria}</Typography>
          </Grid>

          <Grid item xs={12} container sx={{ marginTop: '20px' }}>
            <Grid item xs={4}>
              
              {adults1}:
            </Grid>
            <Grid item xs={4}>
              x{selectedPeople.adults}
            </Grid>
            <Grid item xs={4}>
            €{adultsPrice}
            </Grid>
          </Grid>
         

          <Grid item xs={12} container sx={{ marginTop: '50px' }}>
            <Grid item xs={8}>
              <Typography variant="h6">{telikitimi}:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">€{finalPrice}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CustomCard>
    );

  }
}
