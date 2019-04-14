
import Vuex from 'vuex';

import navigation from './navigation';
import viewport from './viewport';

const modules = {
  navigation,
  viewport,
};

export default () => new Vuex.Store({
  modules,
});
