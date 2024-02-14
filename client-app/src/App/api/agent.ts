import axios, { AxiosError, AxiosResponse } from "axios";
import { Activity } from "../Models/Activity";
import { resolve } from "path";
import { error } from "console";
import { promises } from "dns";
import { toast } from "react-toastify";
import { redirectDocument } from "react-router-dom";
import globalRouter from "../../router/Routes";
 interface interf {

    error:{}
}
axios.defaults.baseURL = "http://localhost:5000/API/"

var responseBody = <T>(response: AxiosResponse<T>) => response.data
const seleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.interceptors.response.use(async response => {
    await seleep(1000)
    return response
},(error)=>{

    const {data,status}=error.response!;
    switch (status) {
        case 400:
            if(data.error){
                
console.log('here')
            }
            toast.error("bad request")
            break;
    
        case 401:
            toast.error("unauthorized")
            break;
    
        case 404:
            globalRouter.navigate!("Not-Found");
            break;
            
            
    
        case 500:
            toast.error("server error")
            break;
    
    }
    return Promise.reject(error)
}

)

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const activities = {
    list: () => requests.get<Activity[]>('/Activities'),
    detail: (id: string) => requests.get<Activity>('/Activities/' + id),
    create: (activity: Activity) => axios.post<void>('/Activities', activity),
    update: (activity: Activity) => axios.put<void>('/Activities/' + activity.id, activity),
    delete: (id: string) => requests.del<Activity>('/Activities/' + id)
}

const agent = {
    activities
}



export default agent;