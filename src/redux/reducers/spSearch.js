/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import createReducer from '../helpers/createReducer'
import * as types from '../actions/types'

export const serviceProviders = createReducer({}, {
  [types.CONSUMER_SEARCH](state, action) {
    // alert("returnState" + JSON.stringify(action.payload));
    return action.payload;
  }
});