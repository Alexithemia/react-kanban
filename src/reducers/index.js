import {
  ADD_CARD,
  SELECT_CARD,
  DELETE_CARD,
  EDIT_CARD,
  STATUS_CARD,
  LOAD_CARDS,
  LOAD_USERS,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER
} from '../actions';

const initialState = {
  cards: [],
  users: [],
  loggedIn: localStorage.getItem('logged_in'),
  userId: localStorage.getItem('userId')
}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return Object.assign({}, state, { selectedCard: action.payload, cards: [...state.cards, action.payload] });

    case SELECT_CARD:
      return Object.assign({}, state, { selectedCard: action.payload });

    case DELETE_CARD:
      let deleteState = state.cards.filter((card) => {
        return card.id !== action.payload.id;
      });
      return Object.assign({}, state, { cards: deleteState });

    case EDIT_CARD:
      let editState = state.cards.filter((card) => {
        return card.id !== action.payload.id;
      });
      editState.push(action.payload);
      return Object.assign({}, state, { cards: editState });

    case STATUS_CARD:
      state.cards.forEach(card => {
        if (card.id === action.payload.id) {
          card.status_id = action.payload.status_id;
        }
      });
      return Object.assign({}, state, { cards: state.cards });
    case LOAD_CARDS:
      return Object.assign({}, state, action.payload);
    case LOAD_USERS:
      return Object.assign({}, state, { users: action.payload.users });
    case LOGIN_USER:
      return Object.assign({}, state, { loggedIn: action.payload.success, userId: action.payload.id });
    case REGISTER_USER:
      return state;
    case LOGOUT_USER:
      return Object.assign({}, state, { loggedIn: false, userId: null });
    default:
      return state;
  };
};

export default cardReducer;