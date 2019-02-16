export const ADD_CARD = 'ADD_CARD';
export const SELECT_CARD = 'SELECT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const STATUS_CARD = 'STATUS_CARD';
export const LOAD_START = 'LOAD_START';
export const LOAD_USERS = 'LOAD_USERS';

export function addCard(newCard) {
  console.log(newCard);

  // return {
  //   type: ADD_CARD,
  //   payload: newCard
  // };
};

export function selectCard(cardData) {
  return {
    type: SELECT_CARD,
    payload: cardData
  };
};

export function deleteCard(cardId) {
  return {
    type: DELETE_CARD,
    payload: cardId
  };
};

export function editCard(cardData) {
  return {
    type: EDIT_CARD,
    payload: cardData
  };
};

export function updateStatus(cardData) {
  return {
    type: STATUS_CARD,
    payload: cardData
  };
};


export const loadStart = () => {
  return (dispatch) => {
    return fetch('/kanban/cards')
      .then((response) => {
        return response.json();
      })
      .then((state) => {
        return dispatch({
          type: LOAD_START,
          payload: state
        })
      })
  }
}

export const loadUsers = () => {
  return (dispatch) => {
    return fetch('/kanban/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return dispatch({
          type: LOAD_USERS,
          payload: users
        })
      })
  }
}