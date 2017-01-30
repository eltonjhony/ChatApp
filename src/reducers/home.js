import * as types from '../actions/types'

const initialState = {
  name: ''
}

export default function name(state = initialState, action) {

  switch (action.type) {

    case types.WRITE_NAME:
      return action.payload;
      break;

    default:
      return state;
  }

};
