import 'core-js';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import configureStore from 'store/configureStore';
import createRootReducer from 'store/rootReducer';
import App from './Main/App';
import './index.css';

const history = createBrowserHistory();
const { store } = configureStore({ history, initialState: {} });

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./Main/App', () => {
    return render();
  });
  module.hot.accept('./store/rootReducer', () => {
    store.replaceReducer(createRootReducer(history));
  });
}
