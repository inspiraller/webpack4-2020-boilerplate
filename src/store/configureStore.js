import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './rootReducer';

const configureStore = ({ initialState = {}, history }) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [thunk, routerMiddleware(history)];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(createRootReducer(history), initialState, enhancer);
  return { store };
};

export default configureStore;
