/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
