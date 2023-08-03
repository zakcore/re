import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from '../Models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import axios, { AxiosResponse } from 'axios';
import LoadingComponent from './LoadingComponent';

function App() {
const [activities,setActivies]=useState<Activity[]>([]);
const [selectedactivity,setSelectedActivity]=useState<Activity|undefined>(undefined);
const[editmode,seteditmode]=useState(false)
const[loading,setloading]=useState(true)

useEffect(()=>{
agent.activities.list().then(response=>{
  
  var activities:Activity[]=[]
  response.forEach(e=>{

     e.date=e.date.split('T')[0];
    activities.push(e)
  }
    )
  setActivies(activities);
  setloading(false)
 
})
},[])

function handleSelectedActivity(id:string){
  setSelectedActivity(activities.find(x=>x.id===id))
}

function handleCancelSlectActivity(){
  setSelectedActivity(undefined)
}


function handleFormOpen(id?:string){
  id?handleSelectedActivity(id):handleCancelSlectActivity()
  seteditmode(true)
}
function handleFormClose(){
  seteditmode(false)
}

function editOrCreateActivity(activity:Activity){
activity.id?setActivies([...activities.filter(x=>x.id!==activity.id),activity]):setActivies([...activities,{...activity,id:uuid()}]);
setSelectedActivity(activity)
seteditmode(false);

}


function handledeleteActivity(id:string){
  setActivies([...activities.filter(x=>x.id!==id)]);
}

if (loading ){
  return(<LoadingComponent  content='Loading....' /> )
}else{


  return (
    
    <>
    <NavBar formOpen={handleFormOpen} />
    <Container style={{marginTop:'7em'}}>
    <ActivityDashboard Activities={activities} 
    selectedActivity={selectedactivity} 
    selectActivity={handleSelectedActivity} 
    cancelSlectActivity={handleCancelSlectActivity}
    formOpen={handleFormOpen}
    formClose={handleFormClose}
    editMode={editmode}
    editOrCreate={editOrCreateActivity}
    deleteActivity={handledeleteActivity}
    ></ActivityDashboard>
  
    </Container>
     
    </>
  );
}

}

export default App;
