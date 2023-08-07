import {shuffleCards} from '../../lib/shuffle';
import {STATUS} from '../gameStatus';
import * as CardType from "../../lib/constants";

const cardNames: string[] = ['viber', 'whatsapp', 'youtube'];

let timerId

const statusHandler = {
    PLAY: function ({commit}): void {
        timerId = setInterval(function () {
            commit('counting')
        }, 1000)
    },

    PASS: function ({commit}): void {
        clearInterval(timerId)
        commit('updateHighestSpeed')
    }
}

export default {
    reset: function ({commit}): void {
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

    updateStatus: function (context, status): void {
        context.commit('updateStatus', status);
        statusHandler[status] && statusHandler[status](context);
    },

    flipCard: function ({commit}, card: CardType): void {
        commit('flip', card);
    },

    flipCards: function ({commit}, cards): void {
        commit('flips', cards);
    },

    match: function ({commit}): void {
        commit('decreaseMatch');
    }
}
