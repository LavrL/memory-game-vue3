
import type {State} from "@/vuex";

export default {
    leftMatched: (state:State) => state.leftMatched,
    highestSpeed: (state:State) => state.highestSpeed,
    elapsedMs: (state:State) => state.elapsedMs,
    cards: (state:State) => state.cards,
    status: (state:State) => state.status
}
