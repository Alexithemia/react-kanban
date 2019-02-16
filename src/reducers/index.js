import { ADD_CARD, SELECT_CARD, DELETE_CARD, EDIT_CARD, STATUS_CARD, LOAD_START } from '../actions';

let payloadId = 5;

const initialState = {
  cards: [
    {
      id: 1,
      title: `Make Cookies`,
      body: 'Need cookies for party, make chocolate chip',
      priority_id: '3',
      status_id: '1',
      created_by: '4',
      assigned_to: '4',
      "assignedUser": {
        "id": 4,
        "first_name": "Jenny",
        "last_name": "Doe"
      },
      "createdByUser": {
        "id": 4,
        "first_name": "guy1",
        "last_name": "Doe"
      }
    },
    {
      id: 2,
      title: `Buy Pizza`,
      body: 'Need 10 pizza to feed everyone at the party',
      priority_id: '2',
      status_id: '1',
      created_by: '1',
      assigned_to: '3',
      "assignedUser": {
        "id": 3,
        "first_name": "Jimmy",
        "last_name": "Doe"
      },
      "createdByUser": {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe"
      }
    },
    {
      id: 3,
      title: 'Clean House',
      body: 'Dont want guests seeing a dirty house',
      priority_id: '2',
      status_id: '2',
      created_by: '2',
      assigned_to: '1',
      "assignedUser": {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe"
      },
      "createdByUser": {
        "id": 2,
        "first_name": "Jane",
        "last_name": "Doe"
      }
    },
    {
      id: 4,
      title: 'Choose games',
      body: 'Select games to play with everyone and check they work',
      priority_id: '3',
      status_id: '3',
      created_by: '1',
      assigned_to: '2',
      "assignedUser": {
        "id": 2,
        "first_name": "Jane",
        "last_name": "Doe"
      },
      "createdByUser": {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe"
      }
    }
  ],
  users: [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe'
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Doe'
    },
    {
      id: 3,
      first_name: 'Jimmy',
      last_name: 'Doe'
    },
    {
      id: 4,
      first_name: 'Jenny',
      last_name: 'Doe'
    },
  ]
}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      action.payload.id = payloadId++;
      return Object.assign({}, state, { selectedCard: action.payload, cards: [...state.cards, action.payload] });

    case SELECT_CARD:
      return Object.assign({}, state, { selectedCard: action.payload });

    case DELETE_CARD:
      let deleteState = [];
      state.cards.map(card => {
        if (!(card.id === action.payload.id)) {
          deleteState.push(card);
        }
        return {};
      });
      return Object.assign({}, state, { cards: deleteState });

    case EDIT_CARD:
      let editState = [];
      state.cards.map(card => {
        if (!(card.id === action.payload.id)) {
          editState.push(card);
        }
        return {};
      });
      editState.push(action.payload);
      return Object.assign({}, state, { cards: editState });

    case STATUS_CARD:
      let statusState = [];
      state.cards.map(card => {
        if (card.id === action.payload.id) {
          card.status_id = action.payload.status_id;
        }
        statusState.push(card);
        return {};
      });
      return Object.assign({}, state, { cards: statusState });
    case LOAD_START:
      console.log(action.payload);
      return state;
    default:
      return state;
  };
};

export default cardReducer;