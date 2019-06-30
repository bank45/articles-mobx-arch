import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css'
import { observer, inject } from 'mobx-react'
import { IloginStore } from '../../stores/loginStore'

interface LoginProps {
    loginStore?: IloginStore,
}

@inject('loginStore')
@observer
class Login extends Component<LoginProps> {
    checkLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const form = {}
        formData.forEach(async function (value, key) {
            form[key] = value
        })
        if (form['username'] === 'Dog' && form['password'] === '777') {
            const date: any = new Date()
            console.log(date)
            document.cookie = `sessionId=werer234890834; path=/; expires=${date}`;
            this.clickAccess();
        } else {
            this.clickDenied();
        }
    }

    private clickDenied = async () => {
        const { setDenied } = this.props.loginStore!;
        await setDenied();
    }

    private clickAccess = async () => {
        const { onAccess } = this.props.loginStore!;
        await onAccess();
    }
    render() {
        const { onLogin, denied } = this.props.loginStore!;
        if (onLogin) { return <Redirect to={'/top-secret'} /> }
        return (
            <div className="divForm">
                <div className="inLogin">
                    <form onSubmit={this.checkLogin} action="">
                        Авторизация<br />
                        <input name='username'
                            type="text"
                            placeholder="Login"
                        /><br />
                        <input name='password'
                            type="password"
                            placeholder="password"
                        /><br />
                        <button type="submit" className="btn" value="buttonLogin">Login</button>
                    </form>
                </div>
                {denied}
            </div>
        )
    }
}

export default Login;
