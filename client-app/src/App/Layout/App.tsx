import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../Models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
const [activities,setActivies]=useState<Activity[]>([]);
const [selectedactivity,setSelectedActivity]=useState<Activity|undefined>(undefined);
const[editmode,seteditmode]=useState(false)
useEffect(()=>{
axios.get<Activity[]>('http://localhost:5000/api/activities').then(Response=>{
  setActivies(Response.data);

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

    ></ActivityDashboard>

    </Container>
     
    </>
  );
}

export default App;
