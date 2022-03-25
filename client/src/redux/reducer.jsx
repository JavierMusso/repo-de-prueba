import { GET_CHARACTERS } from "./actions";

const initialState = {
  characters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, characters: [...state.characters, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
