import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import './login.css'

interface IRecProps {
    onLogin: boolean;
    handlerLogin: any
}

class Login extends Component<IRecProps> {

    checkLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const form = {}
        formData.forEach(async function (value, key) {
            form[key] = value
        })
        console.log("access:", form['login'], form['pass'],form, "props:", this.props.onLogin)
        if (form['login'] == 'Dog' && form['pass'] == '777') {
            this.props.handlerLogin();
            const date: any = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
            document.cookie = "sessionId=" + "werer234890834" + ";path=/;expires=" + date;
        }
    }

    render() {

        if (this.props.onLogin) { return <Redirect to={'/top-secret'} /> }
        console.log("render", this.props)
        const denied = (!this.props.onLogin) ? <p>Неверно введены имя пользователя или пароль</p> : null;
        return (
            <div className="divForm">
                <div className="inLogin">
                    <form onSubmit={this.checkLogin} action="">
                        Авторизация<br />
                        <input name='login'
                            type="text"
                            placeholder="Login"
                        /><br />
                        <input name='pass'
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
