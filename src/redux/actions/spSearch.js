/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import * as types from './types';
import firebase from 'react-native-firebase';

export function consumerSearch () {
    return (dispatch, getState) => {
        firebase.database().ref("test/users").orderByChild("jobs").limitToLast(15).once("value", (data) => {
            let serviceProviders = data.val();
            if (serviceProviders != null) {
                dispatch({
                    type: types.CONSUMER_SEARCH,
                    payload: serviceProviders,
                });
                return true;
            } else {
                dispatch({
                    type: types.CONSUMER_SEARCH,
                    payload: serviceProviders,
                });
                return false;
            }
        });
    }
}


export function jobsQuery () {
    return (dispatch, getState) => {
        firebase.database().ref("test/jobs").on("value", (data) => {
            let jobs = data.val();
            if (jobs != null) {
                dispatch({
                    type: types.HOME_SEARCH,
                    payload: jobs,
                });
                return true;
            } else {
                dispatch({
                    type: types.HOME_SEARCH,
                    payload: jobs,
                });
                return false;
            }
        });
    }
}
