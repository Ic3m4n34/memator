import { mapGetters } from 'vuex';
import debounce from 'lodash/debounce';

const WIDTH_DEBOUNCE_MS = 200;

function hasWindow() {
  return typeof window !== 'undefined';
}

export default {
  data() {
    return {
      scrollHandler: null,
      resizeHandler: null,
    };
  },
  created() {
    if (!hasWindow()) return;
    this.scrollHandler = () => this.setViewportScroll();
    this.resizeHandler = debounce(
      () => { this.setViewportSize(); },
      WIDTH_DEBOUNCE_MS,
    );
    this.setViewportSize();
    this.setViewportScroll();
    window.addEventListener('scroll', this.scrollHandler);
    window.addEventListener('resize', this.resizeHandler);
  },
  destroyed() {
    if (!hasWindow()) return;
    window.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.resizeHandler);
    this.scrollHandler = null;
    this.resizeHandler = null;
  },
  computed: mapGetters({
    hasVerticalScrollbar: 'viewport/hasVerticalScrollbar',
    backdropIsActive: 'backdrop/isActive',
    backdropIsGloballyActive: 'backdrop/isGloballyActive',
  }),
  methods: {
    setViewportScroll() {
      if (!hasWindow()) return;
      this.$store.commit('viewport/SET_SCROLL', window.pageYOffset);
    },
    setViewportSize() {
      if (!hasWindow()) return;
      this.$store.commit('viewport/SET_SIZE', {
        width: window.innerWidth,
        height: window.innerHeight,
        docWidth: document.documentElement.clientWidth,
      });
    },
  },
};
