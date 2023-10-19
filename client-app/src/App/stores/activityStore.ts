import { makeAutoObservable, makeObservable, observable, runInAction } from "mobx"
import { Activity } from "../Models/Activity"
import agent from "../api/agent"
import { v4 as uuid } from 'uuid';
export default class Activitystore{
  activities:Activity[]=[]
  selectedactivity:Activity|undefined=undefined
  loadingInitial=false
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

    e.date=e.date.split('T')[0];
   this.activities.push(e)
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
    this.selectedactivity=this.activities.find(x=>x.id===id)
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
this.activities.push(activity)
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
this.activities=[...this.activities.filter(x=>x.id!==activity.id),activity]
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



 
}