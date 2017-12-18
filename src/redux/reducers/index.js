/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import { combineReducers } from 'redux';
import * as spSearch from './spSearch';

export default combineReducers(Object.assign(
    spSearch,
));
