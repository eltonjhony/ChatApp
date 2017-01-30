import * as types from './types'

export function handleName(name) {
  return {
    type: types.WRITE_NAME,
    payload: name
  };
}
