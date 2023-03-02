import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createPage1Slice } from './slices/page1Slice';
import { createPage2Slice } from './slices/page2Slice';

let store = (...a) => ({
  ...createPage1Slice(...a),
  ...createPage2Slice(...a),
});

store = persist(store, {
  name: 'menu-storage',
  storage: createJSONStorage(() => sessionStorage),
  partialize: state => ({
    selectedRoute: state.selectedRoute,
    selectedPort: state.selectedPort,
    selectedDate: state.selectedDate,
    selectedCard:state.selectedCard,
    usersInformation:state.usersInformation,
    final_reserve:state.final_reserve,
    flag_final:state.flag_final,
    selectedPeople:state.selectedPeople,
    finalPrice:state.finalPrice,
    final_reserveB2BOptional:state.final_reserveB2BOptional,
    
    
  }),
});

export const useBoundStore = create(store);
