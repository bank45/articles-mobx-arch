import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
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
    @observable onLogin: any;
    constructor(props) {
        super(props);
        this.onLogin = false
    }

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
        const { onLogin } = this;
        const WrappedLogin = (props) => {
            return (<Login{...props} onLogin={onLogin} handlerLogin={() => { this.onLogin = true }} />)
        }
        const WrappedSecret = (props) => {
            return (<Secret{...props} onLogin={onLogin} />)
        }

        return <div>
            <Header />
            {this.renderMenu()}
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/articles" component={Articles} exact />
                <Route path="/top-secret" component={WrappedSecret} />
                <Route path="/login" render={WrappedLogin} />
                <Route path="/" component={Page404} />
            </Switch>

        </div>
    }
}

export default App