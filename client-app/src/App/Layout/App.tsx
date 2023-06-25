import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../Models/Activity';
import NavBar from './NavBar';

function App() {
const [activities,setActivies]=useState<Activity[]>([]);
useEffect(()=>{
axios.get<Activity[]>('http://localhost:5000/api/activities').then(Response=>{
  console.log(Response);
  setActivies(Response.data);

})
},[])

  return (
    <>
    <NavBar/>
    <Container style={{marginTop:'7em'}}>

      <List>{activities.map((activity)=>(
        <List.Item key={activity.id}>{activity.title}</List.Item >
      ))}</List>
    </Container>
     
    </>
  );
}

export default App;
