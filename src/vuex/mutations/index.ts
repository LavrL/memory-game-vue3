import type {CardType} from "@/lib/constants";
import type {State} from "@/vuex";

export default {
    reset(state: State, newState: State): void {
        state.leftMatched = newState.leftMatched
        state.highestSpeed = newState.highestSpeed
        state.status = newState.status
        state.cards = newState.cards
        state.elapsedMs = newState.elapsedMs
    },

    updateStatus(state: State, newStatus: string): void {
        state.status = newStatus
    },

    decreaseMatch(state: State): void {
        state.leftMatched = state.leftMatched - 1;
    },

    flip(state: State, cardFlipped: CardType): void {
        const card = state.cards.find((card: CardType) => card === cardFlipped);
        if (card) {
            card.flipped = !card.flipped;
        }
    },

    flips(state: State, cards: CardType[]): void {
        state.cards
            .filter((card: CardType) => cards.indexOf(card) >= 0)
            .forEach((card: CardType) => {
                card.flipped = !card.flipped
            })
    },

    counting(state: State): void {
        state.elapsedMs = state.elapsedMs + 1;
    },

    updateHighestSpeed(state: State): void {
        if (!localStorage?.getItem('highestSpeed')) {
            return localStorage.setItem('highestSpeed', state.elapsedMs)
        }
        if (localStorage?.getItem('highestSpeed')! > state.elapsedMs) {
            return localStorage.setItem('highestSpeed', state.elapsedMs)
        }
    }
}