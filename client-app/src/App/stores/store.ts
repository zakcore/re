import { createContext, useContext } from "react";
import Activitystore from "./activityStore";
import commonStore from "./commonStore";

interface store{
    activityStore:Activitystore
    commonStore:commonStore;

}

export const store:store={
    activityStore:new Activitystore(),
    commonStore:new commonStore()
}

export const StoreContext=createContext(store)

export function useStore(){
    return useContext(StoreContext)
}