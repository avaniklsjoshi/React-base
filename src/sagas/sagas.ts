import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  INCREMENT,
  INCREMENT_ASYNC,
  PEOPLE_RECEIVED,
  PEOPLE_REQUEST_FAILED,
  STARSHIP_REQUEST,
  STARSHIP_REQUEST_FAILED,
  PLANET_REQUEST,
} from '../actions/actionTypes';

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

export const api = (url: string) => fetch(url).then(response => response.json());

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  // yield delay(1000) // the yield expression delay(1000) is evaluated before it gets passed to the caller of next (the caller could be the middleware when running our code. It could also be our test code which runs the Generator function and iterates over the returned Generator). So what the caller gets is a Promise, like in the test code above.
  yield call(delay, 1000); // Effect is a CALL- then it'll call the given function,,,, the yield expression call(delay, 1000) is what gets passed to the caller of next. call just like put, returns an Effect which instructs the middleware to call a given function with the given arguments. In fact, neither put nor call performs any dispatch or asynchronous call by themselves, they return plain JavaScript objects. ex- theFunction.call(valueForThis, arg1, arg2, ...)
  yield put({ type: INCREMENT }); // PUT, then, it will dispatch an action to the Store.
  // put and call return plain objects,

  // error handling---------
  try {
    const people = yield call(api, 'https://swapi.co/api/people/');
    yield put({ type: PEOPLE_RECEIVED, payload: people.results });
    const starShips = yield call(api, 'https://swapi.co/api/starships/');
    yield put({ type: STARSHIP_REQUEST, payload: starShips.results });
    const planets = yield call(api, 'https://swapi.co/api/planets/');
    yield put({ type: PLANET_REQUEST, payload: planets.results });
  } catch (error) {
    yield put({ type: PEOPLE_REQUEST_FAILED, error });
  }
}

export function* starShips() {
  try {
    const starShips = yield call(api, 'https://swapi.co/api/starships/');
    yield put({ type: STARSHIP_REQUEST, payload: starShips.results });
  } catch (error) {
    yield put({ type: STARSHIP_REQUEST_FAILED, error });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export function* watchStarShips() {
  yield takeEvery(STARSHIP_REQUEST, starShips);
}

// notice how we now only export the rootSagae
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchStarShips()]);
}

// refer https://github.com/redux-saga/redux-saga/blob/master/examples/real-world/sagas/index.js for nice structuring the sagas
