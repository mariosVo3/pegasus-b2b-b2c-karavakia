export const createPage2Slice = set => ({
  usersInformation: [],
  setSelectedUsersInformation: newUserInfo =>
    set(state => ({ ...state, usersInformation: newUserInfo })),
    rsvr: [],
    setrsvr: newrsvr =>
      set(state => ({ ...state, rsvr: newrsvr })),
      final_reserve: [],
      setfinal_reserve: newfinal_reserve =>
        set(state => ({ ...state, final_reserve: newfinal_reserve })),
        final_reserveB2BOptional: [],
        setfinal_reserveB2BOptional: newfinal_reserveB2BOptional =>
          set(state => ({ ...state, final_reserveB2BOptional: newfinal_reserveB2BOptional })),
        flag_final: true,
        setflag_final: newflag_final =>
          set(state => ({ ...state, flag_final: newflag_final })),
});
