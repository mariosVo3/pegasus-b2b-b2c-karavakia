import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { useBoundStore } from '../store/store';
import { useTranslateStore } from '../store/translateStore';
import { Container } from '@mui/material';


function DatePickerFrom() {
  const selectedDate = useBoundStore(state => state.selectedDate);
  const lang = useTranslateStore(state => state.lang);

  const setSelectedDate = useBoundStore(state => state.setSelectedDate);
  const handleChange = newValue => {
    setSelectedDate(newValue);
  };
  if(lang=='gr'){
    var  date='Επιλογή Ημερομηνίας';
 
 }else if(lang=="en"){
  var  date='Select Date';

    
 }else if(lang=="pl"){
  var  date='Select Date';


 }else if(lang=="fr"){
  var  date='Select Date';


   
 }else if(lang=="it"){
  var  date='Select Date';

 }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container
      maxWidth="lg"
      sx={{
        display: { md: 'block', xs: 'flex', sm: 'flex' },
        justifyContent: 'center',
      }}
    >
      <DesktopDatePicker
        maxDate={dayjs(new Date())}
        label={date}
        inputFormat="DD/MM/YYYY"
        value={selectedDate}
        onChange={handleChange}
        renderInput={params => <TextField {...params} sx={{ width: 200 }} />}
      />
      </Container>
    </LocalizationProvider>
  );
}

export default DatePickerFrom;
