import axios, { AxiosError, AxiosResponse } from "axios";
import { Activity } from "../Models/Activity";
import { toast } from "react-toastify";
import globalRouter from "../../router/Routes";
import { store } from "../stores/store";

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

    const {data,status,config} = error.response!;
    switch (status) {

        case 400:
            if(typeof data==='string') {
                toast.error(data);
            }
            if(config.method==='get' && data.errors.hasOwnProperty('id')){
                globalRouter.navigate!("Not-Found");
            }
            if (data.errors) {
                const modalStateErrors = [];
                for (const n in data.errors) {
                    if (data.errors[n]) {
                        modalStateErrors.push(data.errors[n])

                    }
                }
                throw modalStateErrors.flat();
            } 
            break;
    
        case 401:
            toast.error("unauthorized")
            break;
    
        case 404:
            globalRouter.navigate!("Not-Found");
            break;
            
            
    
        case 500:
            store.commonStore.SetServerError(data);
            globalRouter.navigate!("ServerError");
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