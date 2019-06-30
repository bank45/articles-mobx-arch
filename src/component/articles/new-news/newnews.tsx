import React, { Component } from 'react';
import { observer,inject } from 'mobx-react'
import { ArticleStore } from '../../../stores/articleStore'

interface ArticleProps {
    articleStore?: ArticleStore
}

@inject('articleStore')
@observer
class NewNews extends Component<ArticleProps> {

    componentWillMount() {
        this.props.articleStore!.setNewNews()
    }

    render() {
        const { newnews } = this.props.articleStore!
        return (
            <div>
                <div className="sectionHed">
                    <h3 >Самые новые</h3>
                    <ul>
                        {
                            newnews.slice(0, 5).map((n) => {
                                return (
                                    <li key={n.url}>{n.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default NewNews







