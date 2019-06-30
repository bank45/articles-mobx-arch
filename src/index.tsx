import React from 'react';
import ReactDOM from 'react-dom';
//import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import {LoginStore} from './stores/loginStore'
import {ArticleStore} from './stores/articleStore'
import App from './component/app';
const createBrowserHistory = require('history').createBrowserHistory;

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  loginStore: new LoginStore(),
  articleStore: new ArticleStore(),
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
<Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
