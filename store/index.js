
import Vuex from 'vuex';

import navigation from './navigation';

const modules = {
  navigation,
};

export default () => new Vuex.Store({
  modules,
});
