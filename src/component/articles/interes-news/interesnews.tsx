import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { observable, decorate } from 'mobx'
import { ArticleStore } from '../../../stores/articleStore'
import ServiceAPI from '../../../service'
import { async } from 'q';

interface ArticleProps {
    articleStore?: ArticleStore
}

@inject('articleStore')
@observer
class InteresNews extends Component<ArticleProps> {
    // @observable interes = [];
    // serviceAPI = new ServiceAPI();
    componentWillMount() {
        this.props.articleStore!.setInteres()

    }

    render() {
        const { interes } = this.props.articleStore!
        console.log(interes)
        return (
            <div>
                <div className="sectionHed">
                    <h3 >Самые интересные</h3>
                    <ul>
                        {
                            interes.slice(3, 8).map((n) => {
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


export default InteresNews;
