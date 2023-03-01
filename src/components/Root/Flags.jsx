import greekFlag from '../../assets/flags/gr.svg';
import unitedKingdomFlag from '../../assets/flags/gb.svg';
import franceFlag from '../../assets/flags/fr.svg';
import polandFlag from '../../assets/flags/pl.svg';
import italianFlag from '../../assets/flags/it.svg';
import { BoxCenter } from '../styledReusableComponents';
import { useTranslateStore } from '../../store/translateStore';
import React, { useState, useEffect } from 'react';
import { useBoundStore } from '../../store/store';




function Flags() {
  const lang = useTranslateStore(state => state.lang);
  const setLang = useTranslateStore(
    state => state.setLang
  );
  const changeLanguageHandler = e => {

   //changeLanguage("it")
   //selectedLanguage = e.currentTarget.id
   setLang(e.currentTarget.id)
  };
  return (
    <BoxCenter gap="15px">
      <img
        src={greekFlag}
        alt="Greek flag"
        width="30"
        onClick={changeLanguageHandler}
        id="gr"
        style={{ cursor: 'pointer' }}
      />
      <img
        src={unitedKingdomFlag}
        alt="United Kingdom flag"
        width="30"
        onClick={changeLanguageHandler}
        id="en"
        style={{ cursor: 'pointer' }}
      />
      <img
        src={franceFlag}
        alt="France flag"
        width="30"
        onClick={changeLanguageHandler}
        id="fr"
        style={{ cursor: 'pointer' }}
      />
      <img
        src={polandFlag}
        alt="Poland flag"
        width="30"
        onClick={changeLanguageHandler}
        id="pl"
        style={{ cursor: 'pointer' }}
      />
      <img
        src={italianFlag}
        alt="Italian flag"
        width="30"
        onClick={changeLanguageHandler}
        id="it"
        style={{ cursor: 'pointer' }}
      />
    </BoxCenter>
  );
}

export default Flags;
