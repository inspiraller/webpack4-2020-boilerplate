import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RouteWrapper from 'Main/RouteWrapper';
import { ConnectedRouter } from 'connected-react-router/immutable';
import './_App.scss';

class App extends Component {
  componentDidMount() {
    document.title = 'Hello vanilla webpack 4 and all typical packages in a project';
  }

  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <RouteWrapper />
        </div>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

App.defaultProps = {
  history: {}
};

export default App;
