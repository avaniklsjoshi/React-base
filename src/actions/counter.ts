import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from './actionTypes';

export const onIncreament = (count: number) => ({
  type: INCREMENT,
  payload: count,
});

export const onIncreamentAsync = (count: number) => ({
  type: INCREMENT_ASYNC,
  payload: count,
});

export const onDecrement = (count: number) => ({
  type: DECREMENT,
  payload: count,
});
