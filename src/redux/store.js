/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import { compose, createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // used to dispatch() functions
      loggerMiddleware, // used for logging actions
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

export default configureStore({});