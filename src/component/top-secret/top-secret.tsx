import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './topsecret.css';

interface IRecProps {
    onLogin: boolean;
    handlerLogin: any
}

class Secret extends Component<IRecProps> {
    renderSecret = () => {
        return (
            <div className="topSecret" >
                <h3>Top secret page</h3>
                <p>
                    secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret secret
                    </p>
            </div>
        )
    }

    render() {
        const { onLogin } = this.props
        const sId = readCookie('sessionId')
        const topLog = (sId || onLogin) ? this.renderSecret() : <Redirect to="/login" />;
        return (
            <div>
                {topLog}
            </div>
        )
    }
}

const readCookie = (name) => {
    let i, j, c, l = name + "=";
    c = document.cookie.split(';')
    for (i = 0; i < c.length; i++) {
        j = c[i]
        while (j.charAt(0) === ' ') {
            j = j.substring(1, j.length)
        }
        if (j.indexOf(l) === 0) {
            return j.substring(l.length, j.length)
        }
    }
    return ''
}

export default Secret;
