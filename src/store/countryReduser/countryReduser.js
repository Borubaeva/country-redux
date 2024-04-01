import {  SEARCH_COUNTRY_SUCCESS ,ALL_COUNTRIES_ERROR, ALL_COUNTRIES_SUCCESS } from '../types/types'

const countryState = {
  countries: [],
  error: null
};

const countryReducer = (state = countryState, action) => {
    const {type, payload}=action
  switch (type) {
    case SEARCH_COUNTRY_SUCCESS:
      return {
        ...state,
        countries:payload,
        error: null
      };
    case ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload,
        error: null
      };
    case ALL_COUNTRIES_ERROR:
      return {
        ...state,
        countries: [],
        error: payload
      };
    default:
      return state;
  }
};

export default countryReducer;

  