/*
 * AppActions
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {

  updateRoute(params) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_ROUTE,
      params: params
    });
  }

};