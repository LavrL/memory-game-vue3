import {shuffleCards} from '../../lib/shuffle';
import {STATUS} from '../gameStatus';
//import {CardType} from "../../lib/constants";
import type {Commit} from "vuex";

const cardNames: string[] = ['viber', 'whatsapp', 'youtube'];

let timerId: NodeJS.Timer;

export interface CardType {
    flipped: boolean,
    cardName: string
}

const statusHandler = {
    PLAY: function ({commit}: { commit: Commit }): void {
        timerId = setInterval(function () {
            commit('counting')
        }, 1000)
    },

    PASS: function ({commit}: { commit: Commit }): void {
        clearInterval(timerId)
        commit('updateHighestSpeed')
    }
}

export default {
    reset: function ({commit}: { commit: Commit }): void {
        commit('reset', {
            leftMatched: cardNames.length,
            highestSpeed: localStorage.getItem('highestSpeed') || 9999,
            status: STATUS.READY,
            cards: shuffleCards(cardNames.concat(cardNames))
                .map((cardName: string) =>
                    ({flipped: false, cardName: cardName})),
            elapsedMs: 0
        })
    },

    updateStatus: function (context, status: string): void {
        context.commit('updateStatus', status);
        statusHandler[status] && statusHandler[status](context);
    },

    flipCard: function ({commit}: { commit: Commit }, card: CardType): void {
        commit('flip', card);
    },

    flipCards: function ({commit}: { commit: Commit }, cards: CardType): void {
        commit('flips', cards);
    },

    match: function ({commit}: { commit: Commit }): void {
        commit('decreaseMatch');
    }
}
