import { makeAutoObservable, makeObservable, observable, runInAction } from "mobx"
import { Activity } from "../Models/Activity"
import agent from "../api/agent"
import { v4 as uuid } from 'uuid';
export default class Activitystore{
  activityRegistery=new Map<string,Activity>
  selectedactivity:Activity|undefined=undefined
  loadingInitial=true
  editMode=false
  loading=false;

    constructor(){
    makeAutoObservable(this)
  }

  loadActivities=async () => {
    this.setLoadingIntial(true)
    try {
  var activities=await agent.activities.list()
  activities.forEach(e=>{
    this.SetActivity(e)
    this.setLoadingIntial(false)
 }
   )
   this.setLoadingIntial(false)
} catch (error) {
  console.log(error)
}
   
    
  }

  loadActivity=async(id:string)=>{
    let activity=this.GetActivity(id)
    if(activity)
    {
    this.setSelectedActivity(activity)
    return activity
    }else{
      this.setLoadingIntial(true)
      try {
        activity=await agent.activities.detail(id)
        this.SetActivity(activity)
        this.setSelectedActivity(activity)
        this.setLoadingIntial(false)
        return activity
      } catch (error) {
        console.log(error)
        this.setLoadingIntial(false)
      }



    }


  }

  private SetActivity(e:Activity){
    e.date=e.date.split('T')[0];
    this.activityRegistery.set(e.id,e)
  }
  private GetActivity(id:string){
    return this.activityRegistery.get(id)
  }

   setLoadingIntial=(state:boolean)=>{
this.loadingInitial=state

  }

  setSelectedActivity=(activity:Activity)=>{
    this.selectedactivity=activity
  }

createActivity=async(activity:Activity)=>{
  this.loading=true
try {
  await agent.activities.create(activity)
  runInAction(()=>{
this.loading=false
this.activityRegistery.set(activity.id,activity)
this.setSelectedActivity(activity)
this.editMode=false
  })
  
} catch (error) {
  runInAction(()=>{
    this.loading=false
      })
  console.log(error)
}

}

updateActivity=async(activity:Activity)=>{

  this.loading=true

try {
  await agent.activities.update(activity)
  runInAction(()=>{
this.loading=false
this.activityRegistery.set(activity.id,activity)
this.setSelectedActivity(activity)
this.editMode=false
  })
  
} catch (error) {
  runInAction(()=>{
    this.loading=false
      })
  console.log(error)
}

}

deleteActivity=async(id:string)=>{

  this.loading=true
  try{
  await agent.activities.delete(id)
  runInAction(()=>{
this.loading=false
this.activityRegistery.delete(id)
  })
  
} catch (error) {
  runInAction(()=>{
    this.loading=false
      })
  console.log(error)
}

}

get ActivitiesByDate(){
  return Array.from(this.activityRegistery.values()).sort(
    (a,b)=>Date.parse(a.date)-Date.parse(b.date)
  )
}

 
}