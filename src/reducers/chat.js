import * as types from '../actions/types'

export default function chat(state = {}, action) {

  switch (action.type) {
    case types.SEND_MESSAGE:
      return state;

    default:
      return state;
  }

};
