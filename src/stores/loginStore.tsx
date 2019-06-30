import { observable, action } from 'mobx'

export interface IloginStore {
    onLogin: boolean;
    denied: string;
    onAccess(): any;
    setDenied(): any;
}

export class LoginStore implements IloginStore {
    @observable onLogin = false;
    @observable denied = "";
    @observable on = false

    @action.bound
    public onAccess(): any {
        this.onLogin = true;
    }

    @action.bound
    public setDenied(): any {
        this.denied = "Неверно введены имя пользователя или пароль";
    }
}

