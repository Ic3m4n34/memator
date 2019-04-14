import isUndefined from 'lodash/isUndefined';

const BREAKPOINTS = {
  mobile: { min: 0, max: 640 },
  tablet: { min: 641, max: 1023 }, // TODO: needs review!
  desktop: { min: 1024, max: 1440 }, // TODO: needs review!
  largeDesktop: { min: 1441 },
};

export default {
  namespaced: true,
  state: {
    scrollY: 0,
    width: 0,
    height: 0,
    docWidth: 0,
  },
  getters: {
    size({ width, height }) {
      return { width, height };
    },
    screenSize(state) {
      const sizes = Object.keys(BREAKPOINTS);
      return sizes.find((size) => {
        const { min, max } = BREAKPOINTS[size];
        return state.width >= min && (isUndefined(max) || state.width <= max);
      }) || sizes[0];
    },
    isMobileScreen(state, getters) {
      return getters.screenSize === 'mobile';
    },
    isTabletScreen(state, getters) {
      return getters.screenSize === 'tablet';
    },
    isDesktopScreen(state, getters) {
      return getters.screenSize === 'desktop';
    },
    isLargeDesktopScreen(state, getters) {
      return getters.screenSize === 'largeDesktop';
    },
    isAtLeastTabletScreen(state, getters) {
      return getters.isTabletScreen ||
        getters.isDesktopScreen ||
        getters.isLargeDesktopScreen;
    },
    isAtLeastDesktopScreen(state, getters) {
      return getters.isDesktopScreen || getters.isLargeDesktopScreen;
    },
    hasVerticalScrollbar(state) {
      return state.width > state.docWidth;
    },
  },
  mutations: {
    SET_SCROLL(state, scrollY) {
      state.scrollY = scrollY;
    },
    SET_SIZE(state, { width, height, docWidth }) {
      state.width = width;
      state.height = height;
      state.docWidth = docWidth;
    },
  },
};
