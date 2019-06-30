import { observable, action } from 'mobx'
import ServiceAPI from '../service'

declare interface Article {
    id: string;
    title: string;
    url: string;
}

export class ArticleStore {

    @observable public interes: Array<Article> = [];
    @observable public newnews: Array<Article> = [];

    serviceAPI = new ServiceAPI();

    @action
    public setInteres = async () => {
        this.serviceAPI.getNewNews('/api/articles/interesting').then((body) => {
            for (let i = 0; i < body.length; i++) {
                this.interes.push(
                    {
                        id: body[i],
                        title: body[i].title,
                        url: body[i].url
                    }
                )
            }
        })
    }

    @action
    public setNewNews = () => {
        this.serviceAPI.getNewNews('/api/articles/new').then((body) => {
            for (let i = 0; i < body.length; i++) {
                this.newnews.push(
                    {
                        id: body[i],
                        title: body[i].title,
                        url: body[i].url
                    }
                )
            }
        })
    }
}
