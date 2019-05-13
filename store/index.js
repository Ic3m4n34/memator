
import Vuex from 'vuex';

import viewport from './viewport';

const modules = {
  viewport,
};

export default () => new Vuex.Store({
  modules,
});
