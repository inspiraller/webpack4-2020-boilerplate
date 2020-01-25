import { handleActions } from 'redux-actions';
import initialState from './_initialState.json';
import { actionTypes as at } from './actionTypes';

const reducer = handleActions(
  {
    [at.TOGGLE_OPEN]: (state, { payload }) => ({
      ...state,
      ...payload
    }),
    [at.TOGGLE_TOPTITLE]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  initialState
);

export default reducer;
