import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom'
import Header from '../header'
import Home from '../home';
import Articles from '../articles'
import Secret from '../top-secret';
import Login from '../login'
import Page404 from '../page404'
import './app.css';

interface Props {
    routing?: any;
}

@inject('routing')
@observer
class App extends Component<Props> {
    renderMenu() {
        const { push } = this.props.routing;
        return (
            <div className="navBar">
                <ul className='menu'>
                    <li className='btn'><button onClick={() => push('/')}>Главная</button></li>
                    <li className='btn'><button onClick={() => push('/articles')}>Статьи</button></li>
                    <li className='btn'><button onClick={() => push('/top-secret')}>Совершенно секретно</button></li>
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