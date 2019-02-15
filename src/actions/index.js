export const ADD_CARD = 'ADD_CARD';
export const SELECT_CARD = 'SELECT_CARD';

export function addCard(newCard) {
  return {
    type: ADD_CARD,
    payload: newCard
  };
};

export function selectCard(cardData) {
  return {
    type: SELECT_CARD,
    payload: cardData
  };
};