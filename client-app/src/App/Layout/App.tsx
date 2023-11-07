import  { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import ActivitForm from '../../features/activities/form/ActivitForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';



function  App()  {
const loaction=useLocation()
  return (
    
    <>
    {loaction.pathname.length>1 &&  <NavBar/>}
    <Routes>
    <Route path='/' Component={HomePage}/>
    <Route path='/activities'  Component={ActivityDashboard}/>
    <Route path='/activities/:id' Component={ActivityDetails}/>
    <Route key={loaction.key} path='/createactivity' Component={ActivitForm}/>
    <Route key={loaction.key} path='/manage/:id' Component={ActivitForm}/>
 
</Routes>
   
     
    </>
  );
}



export default observer (App);
