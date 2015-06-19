import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../constants/ActionTypes';

export function increment() {
  console.log('increment');
  return {
    type: INCREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const {counter} = getState();
    if (counter % 2 === 0) return;
    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log('incrementAsync');
        dispatch(increment());
      }, 300);
    });
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}
