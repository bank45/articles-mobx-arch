import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import App from './component/app';
import {LoginStore} from './stores/loginStore'
import {ArticleStore} from './stores/articleStore'

const createBrowserHistory = require('history').createBrowserHistory;
const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  loginStore: new LoginStore(),
  articleStore: new ArticleStore,
};
const history = syncHistoryWithStore(browserHistory, routingStore);

const Root =()=>(
<Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
