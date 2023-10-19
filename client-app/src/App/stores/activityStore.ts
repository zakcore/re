import { makeAutoObservable, makeObservable, observable } from "mobx"
import { Activity } from "../Models/Activity"
import agent from "../api/agent"
export default class Activitystore{
  activities:Activity[]=[]
  selectedactivity:Activity|undefined=undefined
  loadingInitial=false
  editMode=false

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
 
}