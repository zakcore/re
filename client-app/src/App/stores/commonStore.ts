import { makeAutoObservable } from "mobx";
import ServerError from "../Models/ServerError";

export default class commonStore{

    error:ServerError|null=null;
    constructor(){
        makeAutoObservable(this)
      }
SetServerError=(e:ServerError)=>{

    this.error=e;
}

}