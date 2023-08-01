import { createStore } from 'vuex';

import Todos from './modules/Todos'
const store = createStore({
    modules:{Todos}
  });
  
export default store;