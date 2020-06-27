import { CARD_STATE } from './constants.js';

export const setStateForPairOfCards = cards => {
    const openCards = cards.filter(card => card.state === 'open');

    if (openCards.length !== 2) return cards;

    const isIdentical = openCards[0].value === openCards[1].value;

    return cards.map(card => {
        if (card.state === CARD_STATE.OPEN) {
            return isIdentical
                ? { ...card, state: CARD_STATE.IDENTICAL }
                : { ...card, state: CARD_STATE.DIFFERENT };
        }

        return card;
    });
};

export const closeDifferentCards = cards =>
    cards.map(card =>
        card.state === CARD_STATE.DIFFERENT ? { ...card, state: CARD_STATE.CLOSE } : card,
    );
