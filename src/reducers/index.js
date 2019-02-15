import { ADD_CARD, SELECT_CARD, DELETE_CARD, EDIT_CARD, STATUS_CARD } from '../actions';

let payloadId = 5;

const initialState = {
  cards: [
    {
      id: 1,
      title: `Make Cookies`,
      body: 'Need cookies for party, make chocolate chip',
      priority_id: '3',
      status_id: '1',
      created_by: '0',
      assigned_to: '0'
    },
    {
      id: 2,
      title: `Buy Pizza`,
      body: 'Need 10 pizza to feed everyone at the party',
      priority_id: '2',
      status_id: '1',
      created_by: '0',
      assigned_to: '1'
    },
    {
      id: 3,
      title: 'Clean House',
      body: 'Dont want guests seeing a dirty house',
      priority_id: '2',
      status_id: '2',
      created_by: '0',
      assigned_to: '0'
    },
    {
      id: 4,
      title: 'Choose games',
      body: 'Select games to play with everyone and check they work',
      priority_id: '3',
      status_id: '3',
      created_by: '0',
      assigned_to: '1'
    }
  ],
}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      action.payload.id = payloadId++;
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

    default:
      return state;
  };
};

export default cardReducer;