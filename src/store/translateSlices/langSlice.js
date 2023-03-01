
    export const langSlice = set => ({
        lang: 'gr',
        setLang: newlang =>
          set(state => ({ ...state, lang: newlang })),
          
      });
      