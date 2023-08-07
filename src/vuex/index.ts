import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import Vuex, {Store} from 'vuex';

export {createStore} from 'vuex';

const store: Store<any> = new Vuex.Store({
    state: {
        leftMatched: 0,
        highestSpeed: 0,
        status: '',
        cards: [],
        elapsedMs: 0
    },
    mutations,
    actions,
    getters
})
export default store;