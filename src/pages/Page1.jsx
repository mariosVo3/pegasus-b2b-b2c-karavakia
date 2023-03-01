import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getRoutes, getPorts,getOriginPorts } from '../api/pegasusApi';
import { Container } from '@mui/system';
import AutoCompletePort from '../components/Page1/AutoCompletePort';
import AutoCompleteRoutes from '../components/Page1/AutoCompleteRoutes';
import DatePickerCustom from '../components/Page1/DatePickerCustom';
import { BoxFlexSB } from '../components/styledReusableComponents';
import CardsWithRoutes from '../components/Page1/CardsWithRoutes';
import { useBoundStore } from '../store/store';
import SmallDate from '../components/Page1/SmallDate';
import PricingPopUp from '../components/Page1/PricingPopUp';
import ClickedOutsideOfCard from '../components/Page1/ClickedOutsideOfCard';
import ErrorMessage from '../components/ErrorMessage';
import LoadingMessage from '../components/LoadingMessage';
import { languageTypes } from '../store/translateReducer/translateReducer';
import { useTranslateStore } from '../store/translateStore';


function Page1(props) {
  const selectedPort = useBoundStore(state => state.selectedPort);
  const selectedRoute = useBoundStore(state => state.selectedRoute);
  const selectedDate = useBoundStore(state => state.selectedDate);
  const selectedCard = useBoundStore(state => state.selectedCard);
  const error_msg_pass = useBoundStore(state => state.error_msg_pass);

  const lang = useTranslateStore(state => state.lang);
  const routes = useQuery(['routes'], getRoutes);
  const flag_final = useBoundStore(state => state.flag_final);
  const setflag_final = useBoundStore(
    state => state.setflag_final
  );
  setflag_final(true)
   const ports = useQuery(['ports'], getPorts, {
    select: data =>
      data.map(port => {
        return {
          portId: port.PORT[0],
          gr: port.DESCR[0],
          en: port.DESCRFOREIGN[0],
        };
      }),
  });
  const postPortsObj={
    cruise_id:  selectedRoute,
  }
  /*
  const originports = useQuery({
    queryKey: ['origin-ports', postPortsObj],
    queryFn: () => getOriginPorts(postPortsObj),
    enabled: !!selectedRoute,
    select: data =>
      data.map(port => {
        return {
          gr: port,
        };
      })
  });*/
  let menus;
  let smallDate;
  let cardsWithRoutes;
  let pricingPopUp;
  let errormsg;
  if (routes.isLoading  || ports.isLoading) {
    menus = <LoadingMessage />;
  }
  if (routes.isError) {
    menus = <ErrorMessage message={routes.error.message} />;
  }
  if (ports.isError) {
    menus = <ErrorMessage message={ports.error.message} />;
  }
  if (routes.isSuccess && ports.isSuccess) {
    //==============
    if (!selectedPort && !selectedRoute) {
      menus = (
        <BoxFlexSB>
          <AutoCompleteRoutes routes={routes.data} />
          <AutoCompletePort ports={ports.data} />
          <DatePickerCustom disabled={true} />
        </BoxFlexSB>
      );
    }
    //==============

    if (selectedPort && !selectedRoute) {
      const filteredRoute = routes.data.filter(
        route => route.port === selectedPort[0].gr
      );
      menus = (
        <BoxFlexSB>
          <AutoCompleteRoutes routes={filteredRoute} />
          <AutoCompletePort ports={ports.data} />
          <DatePickerCustom disabled={true} />
        </BoxFlexSB>
      );
    }
    //==============
    if (!selectedPort && selectedRoute) {
      /*const filteredPort = ports.data.filter(
        port => selectedRoute[0].port.filter(p => p === port.gr).length > 0
      );*/
      let filteredPort
      ports.data.forEach(port => {
        if((port.gr==selectedRoute[0].port[0])|| (port.en==selectedRoute[0].port[0])) {
           filteredPort=port
        }
      });
      filteredPort=[filteredPort]
      menus = (
        <BoxFlexSB>
          <AutoCompleteRoutes routes={routes.data} />
          <AutoCompletePort ports={filteredPort} />
          <DatePickerCustom disabled={true} />
        </BoxFlexSB>
      );
    }
    //==============
    if (selectedPort && selectedRoute) {
      menus = (
        <BoxFlexSB>
          <AutoCompleteRoutes routes={selectedRoute} />
          <AutoCompletePort ports={selectedPort}/>
          <DatePickerCustom disabled={false} />
        </BoxFlexSB>
      );
      if (selectedDate) {
        smallDate = <SmallDate />;
        cardsWithRoutes = <CardsWithRoutes />;
      }
      if (selectedCard?.cruise_id) {
        pricingPopUp = <PricingPopUp />;
      }
    }
  }
 if(error_msg_pass){
  errormsg=(
    <ErrorMessage message={error_msg_pass} />
  )
 }
  return (
    <>
      <Container maxWidth="xl">
        {menus}
        {smallDate}
       
      </Container>
      <Container maxWidth="md">
        <ClickedOutsideOfCard>
          {cardsWithRoutes}
          {pricingPopUp}
        </ClickedOutsideOfCard>
      </Container>
    </>
  );
}

export default Page1;
