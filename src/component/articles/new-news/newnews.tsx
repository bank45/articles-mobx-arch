import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class NewNews extends Component {
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
        const res = await fetch('/api/articles/new')
        if (!res.ok) {
            throw new Error(`URL not fetch received ${res.status}`);
        }
        return res.json()
    }

    articleNew = () => {
        return (<ul>
            {
                this.articles.slice(0, 5).map(n => (
                    <li key={n.url}>
                        {n.title}
                    </li>
                ))
            }
        </ul>);
    }

    render() {
        return (
            <div>
                <div className="sectionHed">
                    <h3 >Самое новое</h3>
                    {this.articleNew()}
                </div>
            </div>
        )
    }
}

export default NewNews







