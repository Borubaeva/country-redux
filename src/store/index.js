import { createStore, combineReducers, applyMiddleware } from 'redux';
import countryReducer from './countryReduser/countryReduser';
import { thunk } from 'redux-thunk';

const root = combineReducers({
  country: countryReducer
});

const store = createStore(root, applyMiddleware(thunk));

export default store;
