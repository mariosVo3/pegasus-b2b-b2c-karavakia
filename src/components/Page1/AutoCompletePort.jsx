import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useBoundStore } from '../../store/store';
import { useTranslateStore } from '../../store/translateStore';


export default function AutoCompletePort({ ports }) {
  const selectedPort = useBoundStore(state => state.selectedPort);
  const lang = useTranslateStore(state => state.lang);

  const setSelectedPort = useBoundStore(state => state.setSelectedPort);
  const setSelectedRoute = useBoundStore(state => state.setSelectedRoute);
  const setSelectedDate = useBoundStore(state => state.setSelectedDate);
  const portList = ports.map(port => {
    return { label: port.gr };
  });
  if(lang=='gr'){
    var  port1='Λημάνι';
 
 }else if(lang=="en"){
  var  port1='Port';

    
 }else if(lang=="pl"){
  var  port1='Port';


 }else if(lang=="fr"){
  var  port1='Port';


   
 }else if(lang=="it"){
  var  port1='Port';

 }

  return (
    <Autocomplete
      disablePortal
      isOptionEqualToValue={(option, value) => option.value === value.value}
      options={portList}
      value={selectedPort ? selectedPort[0].gr : null}
      sx={{ width: 400 }}
      renderInput={params => <TextField {...params} label={port1} />}
      onChange={(_, value) => {
        value
          ? setSelectedPort(ports.filter(port => port.gr === value.label))
          : (setSelectedPort(null),
            setSelectedRoute(null),
            setSelectedDate(null));
      }}
    />
  );
}
