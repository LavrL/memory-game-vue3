import { expect } from 'vitest'
import {shuffleCards} from './shuffle'
import { describe, it } from 'vitest'

describe('shuffleCards', () => {
    const arr1 = ['1', '2', '3', '4', '5'];
    it('should shuffle an array of cards', () => {
        const newArr = [];
        for (const card of arr1) {
            newArr.push(card);
        }
        const shuffledArr = shuffleCards(arr1);
        expect(newArr).not.toStrictEqual(shuffledArr);
        expect(newArr).toHaveLength(5);
    })
})