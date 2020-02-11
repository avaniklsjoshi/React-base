import {
  GET_USER_DETAILS,
  PEOPLE_RECEIVED,
  PEOPLE_REQUEST_FAILED,
  STARSHIP_REQUEST,
  STARSHIP_REQUEST_FAILED,
  PLANET_REQUEST,
  PLANET_REQUEST_FAILED,
} from '../actions/actionTypes';

export interface User{
  heroes: any[];
  heroesError: {};
  starShips: any[];
  starShipsError: {};
  planets: any[];
  planetsError: {};
}

const initialState: User = {
  heroes: [],
  heroesError: {},
  starShips: [],
  starShipsError: {},
  planets: [],
  planetsError: {},
};

export default function user(State = initialState, action: any) {
  switch (action.type) {
    case GET_USER_DETAILS: {
      const newState = { ...State };
      return newState;
    }
    case PEOPLE_RECEIVED: {
      const newState = { ...State };
      newState.heroes = action.payload;
      return newState;
    }
    case PEOPLE_REQUEST_FAILED: {
      const newState = { ...State };
      newState.heroesError = action.payload;
      return newState;
    }
    case STARSHIP_REQUEST: {
      const newState = { ...State };
      newState.starShips = action.payload;
      return newState;
    }
    case STARSHIP_REQUEST_FAILED: {
      const newState = { ...State };
      newState.starShipsError = action.payload;
      return newState;
    }
    case PLANET_REQUEST: {
      const newState = { ...State };
      newState.planets = action.payload;
      return newState;
    }
    case PLANET_REQUEST_FAILED: {
      const newState = { ...State };
      newState.planetsError = action.payload;
      return newState;
    }
    default:
      return State;
  }
}
