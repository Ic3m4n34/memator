export default {
  state: {
    navMobileActive: false,
  },
  mutations: {
    TOGGLE_MOBILE_NAV(state) {
      state.navMobileActive = !state.navMobileActive;
    },
  },
  actions: {
    toggleMobileNav(context) {
      context.commit('TOGGLE_MOBILE_NAV');
    },
  },
};
