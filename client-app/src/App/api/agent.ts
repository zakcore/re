import axios, { AxiosResponse } from "axios";
import { Activity } from "../Models/Activity";
import { resolve } from "path";
import { error } from "console";
axios.defaults.baseURL="http://localhost:5000/API/"

var responseBody=<T>(response:AxiosResponse<T>)=>response.data

const seleep=(delay:number)=>{
return new Promise((resolve)=>{
    setTimeout(resolve,delay);
})
}

axios.interceptors.response.use(response=>
    {
return seleep(1000).then(()=>
{return response})
.catch(error=>{

    console.error(error)
    return Promise.reject(error)
})
} )

const requests={
get:<T>(url:string)=>axios.get<T>(url).then(responseBody),
post:<T>(url:string,body:{})=>axios.post<T>(url,body).then(responseBody),
put:<T>(url:string,body:{})=>axios.post<T>(url,body).then(responseBody),
del:<T>(url:string)=>axios.delete<T>(url).then(responseBody)
}

const activities={
    list:()=>requests.get<Activity[]>('/Activities')
}

const agent={
    activities
}

export default agent;