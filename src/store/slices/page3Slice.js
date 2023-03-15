export const createPage3Slice = set => ({
    selectedDateFrom: null,
    selectedDateTo: null,
    selectedNumber: null,

    setSelectedDateFrom: newSelectedDateFrom =>
    set(state => ({ ...state, selectedDateFrom: newSelectedDateFrom })),
    setSelectedDateTo: newSelectedDateTo =>
    set(state => ({ ...state, selectedDateTo: newSelectedDateTo })),
    setSelectedNumber: newSelectedNumber =>
    set(state => ({ ...state, selectedNumber: newSelectedNumber })),
    
  });
  