import { observable, action } from 'mobx'
import ServiceAPI from '../service'
import { async } from 'q';



declare interface Article {
    id: string;
    title: string;
    url: string;
}
declare const ARTICLENEW: Article[];

export class ArticleStore {

    @observable public interes: Array<Article> = [];
    //   newNews = observable([]);

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
            console.log("this.interes", this.interes)
        })
    }

    @action
    public setNewNews = () => {
        this.serviceAPI.getNewNews('/api/articles/new').then((body) => {
            //  this.newNews = body;
        })
    }
}