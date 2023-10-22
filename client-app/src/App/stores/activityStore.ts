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

    try {
  var activities=await agent.activities.list()
  activities.forEach(e=>{

    e.date=e.date.split('T')[0];
   this.activityRegistery.set(e.id,e)
 }
   )
   this.setLoadingIntial(false)
} catch (error) {
  console.log(error)
}
   
    
  }

   setLoadingIntial=(state:boolean)=>{
this.loadingInitial=state

  }

  selectActivity=(id:string)=>{
    this.selectedactivity=this.activityRegistery.get(id)
  }
  
  cancelSelectActivity=()=>{
    this.selectedactivity=undefined
  }

  
openForm=(id?:string)=>{
  id?this.selectActivity(id):this.cancelSelectActivity()
this.editMode=true
}
closeForm=()=>{
  this.editMode=false
}

createActivity=async(activity:Activity)=>{
  this.loading=true
activity.id=uuid()
try {
  await agent.activities.create(activity)
  runInAction(()=>{
this.loading=false
this.activityRegistery.set(activity.id,activity)
this.selectedactivity=activity
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
this.selectedactivity=activity
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
this.cancelSelectActivity()
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