import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import menu from './menu/reducer';

const rootReducer = {
  menu
};

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    ...rootReducer
  });

export default createRootReducer;
export { rootReducer };
