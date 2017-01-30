import * as types from './types'

import Backend from '../Backend'

export function sendMessage(message) {
  Backend.sendMessage(message);
  return {
    type: types.SEND_MESSAGE
  };
}
