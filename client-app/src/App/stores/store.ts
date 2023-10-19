import { createContext, useContext } from "react";
import Activitystore from "./activityStore";

interface store{
    activityStore:Activitystore
}

export const store:store={
    activityStore:new Activitystore()
}

export const StoreContext=createContext(store)

export function useStore(){
    return useContext(StoreContext)
}