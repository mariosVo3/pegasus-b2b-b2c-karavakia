import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createCardsWithRoutesSlice } from './translateSlices/cardsWithRoutesSlice';
import { langSlice } from './translateSlices/langSlice';

import { createSmallDateSlice } from './translateSlices/smallDateSlice';
import { languageTypes, reducer } from './translateReducer/translateReducer';
import { createSchemaSlice } from './translateSlices/schemaSlice';
import { useBoundStore } from './store';
import { SignLanguageTwoTone } from '@mui/icons-material';
 
/*
let store = (...a) => ({
  selectedLanguage: languageTypes.gr,
  ...createCardsWithRoutesSlice(...a),
  ...createSmallDateSlice(...a),
  ...createSchemaSlice(...a),
  changeLanguage: args => set(state => reducer(state, args)),
});

store = persist(store, {
  name: 'language-storage',
  storage: createJSONStorage(() => localStorage),
  partialize: state => ({
    selectedLanguage: state.selectedLanguage,
  }),
});

export const useTranslateStore = create(store);*/





let store = (...a) => ({
  selectedLanguage: languageTypes.gr,
  ...langSlice(...a),
  ...createCardsWithRoutesSlice(...a),
  ...createSmallDateSlice(...a),
  ...createSchemaSlice(...a),
});

store = persist(store, {
  name: 'lang-storage',
  storage: createJSONStorage(() => sessionStorage),
  partialize: state => ({
    lang: state.lang,
  }),
});

export const useTranslateStore = create(store);