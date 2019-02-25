export const ADD_CARD = 'ADD_CARD';
export const SELECT_CARD = 'SELECT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const STATUS_CARD = 'STATUS_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const LOAD_USERS = 'LOAD_USERS';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function addCard(newCard) {
  return (dispatch) => {
    return fetch('/kanban', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCard)
    })
      .then((response) => {
        return response.json();
      })
      .then((responseCard) => {
        return dispatch({
          type: ADD_CARD,
          payload: responseCard
        });
      })
  }
};

export function selectCard(cardData) {
  return {
    type: SELECT_CARD,
    payload: cardData
  };
};

export function deleteCard(cardId) {
  return (dispatch) => {
    return fetch(`/kanban/${cardId.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        return dispatch({
          type: DELETE_CARD,
          payload: cardId
        });
      })
  }
};

export function editCard(cardData) {
  return (dispatch) => {
    return fetch(`/kanban/${cardData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cardData)
    })
      .then((response) => {
        return response.json();
      })
      .then((responseCard) => {
        return dispatch({
          type: EDIT_CARD,
          payload: responseCard
        });
      })
  }
};

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/kanban/cards')
      .then((response) => {
        return response.json();
      })
      .then((state) => {
        return dispatch({
          type: LOAD_CARDS,
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

export const loginUser = (user) => {
  return (dispatch) => {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json();
      })
      .then((body) => {
        if (body) {
          localStorage.setItem('logged_in', true);
          localStorage.setItem('userId', body.id);
          return dispatch({
            type: LOGIN_USER,
            payload: body
          })
        }
      })
      .catch((err) => {
        console.log(err);

      })
  }
}

export const registerUser = (user) => {
  return (dispatch) => {
    return fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: REGISTER_USER,
          payload: ''
        })
      })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    return fetch('/logout')
      .then((response) => {
        return response.json();
      })
      .then(() => {
        localStorage.removeItem('logged_in');
        localStorage.removeItem('userId');
        return dispatch({
          type: LOGOUT_USER,
          payload: ''
        })
      })
  }
}