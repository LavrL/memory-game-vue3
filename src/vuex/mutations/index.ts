import type {CardType} from "@/lib/constants";

export default {
    reset(state, newState): void {
        state.leftMatched = newState.leftMatched
        state.highestSpeed = newState.highestSpeed
        state.status = newState.status
        state.cards = newState.cards
        state.elapsedMs = newState.elapsedMs
    },

    updateStatus(state, newStatus): void {
        state.status = newStatus
    },

    decreaseMatch(state): void {
        state.leftMatched = state.leftMatched - 1;
    },

    flip(state, cardFlipped): void {
        const card = state.cards.find((card: CardType) => card === cardFlipped);
        card.flipped = !card.flipped;
    },

    flips(state, cards): void {
        state.cards
            .filter((card: CardType) => cards.indexOf(card) >= 0)
            .forEach((card: CardType) => {
                card.flipped = !card.flipped
            })
    },

    counting(state): void {
        state.elapsedMs = state.elapsedMs + 1;
    },

    updateHighestSpeed(state): void {
        if (!localStorage.getItem('highestSpeed')) {
            return localStorage.setItem('highestSpeed', state.elapsedMs)
        }
        if (localStorage.getItem('highestSpeed') > state.elapsedMs) {
            return localStorage.setItem('highestSpeed', state.elapsedMs)
        }
    }
}