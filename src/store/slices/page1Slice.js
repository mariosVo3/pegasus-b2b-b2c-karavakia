import { peopleReducer } from '../reducers/peopleReducer';
import { peoplePriceReducer } from '../reducers/peoplePriceReducer';
import { reducer } from '../translateReducer/translateReducer';

export const createPage1Slice = set => ({
  selectedRoute: null,
  selectedPort: null,
  selectedDate: null,
  selectedCard: null,
  selectedLang:'Greek',
  lang:'GR',
  selectedPeople: { adults: 0, infants: 0, children: 0 },
  finalPrice: null,
  error_msg_pass:false,
  WrongPass:'',
  error_msg:'',
  selectedPeoplePrice: { adultsPrice: 0, infantsPrice: 0, childrenPrice: 0 },
  setSelectedRoute: newSelectedRoute =>
    set(state => ({ ...state, selectedRoute: newSelectedRoute })),
    setSelectedLang: newSelectedLang =>
    set(state => ({ ...state, selectedLang: newSelectedLang })),
    setWrongPass: newWrongPass =>
    set(state => ({ ...state, WrongPass: newWrongPass })),
  setSelectedPort: newSelectedPort =>
    set(state => ({ ...state, selectedPort: newSelectedPort })),
  setSelectedDate: newSelectedDate =>
    set(state => ({ ...state, selectedDate: newSelectedDate })),
  setSelectedCard: newSelectedCard =>
    set(state => ({ ...state, selectedCard: newSelectedCard })),
  setSelectedPeople: args => set(state => peopleReducer(state, args)),
  resetSelectedPeople: () =>
    set(state => ({
      ...state,
      selectedPeople: { adults: 0, infants: 0, children: 0 },
    })),
  setFinalPrice: newFinalPrice =>
    set(state => ({ ...state, finalPrice: newFinalPrice })),
    seterror_msg_pass: newerror_msg_pass =>
    set(state => ({ ...state, error_msg_pass: newerror_msg_pass })),
    seterror_msg: newerror_msg =>
    set(state => ({ ...state, error_msg: newerror_msg })),
  setSelectedPeoplePrice: args => set(state => peoplePriceReducer(state, args)),
  
  
});
