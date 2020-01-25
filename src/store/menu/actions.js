import { createAction } from 'redux-actions';
import { actionTypes as at } from './actionTypes';

const acToggleOpen = createAction(at.TOGGLE_OPEN);
const acToggleTopTitle = createAction(at.TOGGLE_TOPTITLE);

const actions = {
  acToggleOpen,
  acToggleTopTitle
};

export { actions };
export default actions;
