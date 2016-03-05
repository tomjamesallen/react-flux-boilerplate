import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';

import App from './components/App.react';
import About from './components/About.react';
import AppActions from './actions/AppActions';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  checkState() {
    AppActions.updateRoute(this.state.params);
  };

  render() {
    const { history } = this.props;
    return (
      <Router history={history} onUpdate={this.checkState}>
        <Route name='home' path='/' component={App}>
          <Route name='segment1' path=':segment1'>
            <Route name='segment2' path=':segment2'>
              <Route name='segment3' path=':segment3'/>
            </Route>
          </Route>
        </Route>
      </Router>
    );
  }
}
