import  { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from '../Models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {

  const {activityStore}=useStore();
const [activities,setActivies]=useState<Activity[]>([]);
const [selectedactivity,setSelectedActivity]=useState<Activity|undefined>(undefined);
const[editmode,seteditmode]=useState(false)
const[loading,setloading]=useState(true)
const[submitting,setsubmitting]=useState(false)

useEffect(()=>{
  activityStore.loadActivities()
},[activityStore])




function handledeleteActivity(id:string){
  setsubmitting(true)
  agent.activities.delete(id).then(()=>{

    setActivies([...activities.filter(x=>x.id!==id)]);
    setsubmitting(false)
  })
}


if (activityStore.loadingInitial ){
  return(<LoadingComponent  content='Loading....' /> )
}else{


  return (
    
    <>
    <NavBar/>
    <Container style={{marginTop:'7em'}}>
    
    <ActivityDashboard Activities={activityStore.activities} 
   

    deleteActivity={handledeleteActivity}
    ></ActivityDashboard>
  
    </Container>
     
    </>
  );
}

}

export default observer (App);
