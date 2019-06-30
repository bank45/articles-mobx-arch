import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { PAGES } from '../../routes/pages';
import { Route, Switch, Link } from 'react-router-dom'
import Header from '../header'
import Home from '../home';
import Articles from '../articles'
import Secret from '../top-secret';
import Login from '../login'
import Page404 from '../page404'
import './app.css';

@inject('routing')
@observer
class App extends Component {
    renderMenu() {
        return (
            <div className="navBar">
                <ul className='menu'>
                    <li className='menuDiv'><Link to={PAGES.home.path}>Главная</Link></li>
                    <li className='menuDiv'><Link to={PAGES.articles.path}>Статьи</Link></li>
                    <li className='menuDiv'><Link to={PAGES.top_secret.path}>Совершенно секретно</Link></li>
                </ul>
            </div>
        );
    }
    render() {
        return <div>
            <Header />
            {this.renderMenu()}
            <main>
                {this.props.children}
            </main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/articles" component={Articles} exact />
                <Route path="/top-secret" component={Secret} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Page404} />
            </Switch>
        </div>
    }
}

export default App