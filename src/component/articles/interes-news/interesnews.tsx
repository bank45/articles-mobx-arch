import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { ArticleStore } from '../../../stores/articleStore'

interface ArticleProps {
    articleStore?: ArticleStore
}

@inject('articleStore')
@observer
class InteresNews extends Component<ArticleProps> {

    componentWillMount() {
        this.props.articleStore!.setInteres()
    }

    render() {
        const { interes } = this.props.articleStore!
        return (
            <div>
                <div className="sectionHed">
                    <h3 >Самые интересные</h3>
                    <ul>
                        {
                            interes.slice(3, 8).map((n) => {
                                return (
                                    <li key={n.url}><a href={n.url}>{n.title}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


export default InteresNews;
