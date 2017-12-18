/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import createReducer from '../helpers/createReducer'
import * as types from '../actions/types'

const initialState = {
    jobs: {},
    serviceProviders: {}
};

export const firebaseQueries = createReducer(initialState, {
    [types.CONSUMER_SEARCH](state, action) {
        return {
            ...state,
            serviceProviders: action.payload
        };
    },
    [types.HOME_SEARCH](state, action) {
        return {
            ...state,
            jobs: action.payload
        };
    }
});