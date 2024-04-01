import axios from 'axios';
import {ALL_COUNTRIES_ERROR,ALL_COUNTRIES_SUCCESS, SEARCH_COUNTRY_ERROR, SEARCH_COUNTRY_SUCCESS } from '../../types/types';

export const searchCountry = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
      dispatch({
        type: SEARCH_COUNTRY_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: SEARCH_COUNTRY_ERROR,
        payload: error.message
      });
    }
  };
};

export const allCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      dispatch({
        type:ALL_COUNTRIES_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: COUNTRIES_ERROR,
        payload: error.message
      });
    }
  };
};

