import React, { Component } from 'react';
import {  observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class InteresNews extends Component {
    @observable articles: any;
    constructor(props) {
        super(props);
        this.articles = [];
    }

    componentDidMount() {
        this.resNew()
            .then((body) => {
                this.articles = body
            })
    }
    async resNew() {
        const res = await fetch('/api/articles/interesting')
        if (!res.ok) {
            throw new Error(`URL not fetch received ${res.status}`);
        }
        return res.json()
    }

    interes = () => {
        return (<ul>
            {
                this.articles.slice(3, 8).map(n => (
                    <li key={n.url}>{n.title} </li>
                ))
            }
        </ul>);
    }

    render() {
        return (
            <div>
                <div className="sectionHed">
                    <h3 >Самое интересное</h3>
                    {this.interes()}
                </div>
            </div>
        )
    }
}

export default InteresNews;
